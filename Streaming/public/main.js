let peer = require("simple-peer")
let socket = require("socket.io")
const video = document.querySelector("video")
let client = {}

// get stream
navigator.mediaDevices.getUserMedia({ video: true, audio: true })

.then(stream => {
    socket.emit("NewClient")
    video.srcObject = stream
    video.play()

    // used to initialize a peer
    function initPeer(type) {
        let peer = new Peer({ initiator:(type == "init") ? true : false, stream: stream, trickle: false })
        peer.on("stream", function(stream) {
            CreateVideo(stream)
        })
        peer.on("close", function() {
            document.getElementById("peerVideo").remove()
            peer.destroy()
        })
        return peer
    }

    // for creating a peer of type init
    function makePeer() {
        client.gotAnswer = false
        let peer = initPeer("init")
        peer.on("signal", function(data) {
            if (!client.gotAnswer) {
                socket.emit("offer", data)
            }
        })
        client.peer = peer
    }

    // for peer of type notInit
    function frontAnswer(offer) {
        let peer = initPeer("notInit")
        peer.on("signal", (data) => {
            socket.emit("answer", data)
        })
        peer.signal(offer)
    }

    function signalAnswer(answer) {
        client.gotAnswer = true
        let peer = client.peer
        peer.signal(answer)
    }

    function createVideo(stream) {
        let video = document.createElement("video")
        video.id = "peerVideo"
        video.srcObject = stream
        video.class = "embed-responsive-item"
        document.querySelector("#peerDiv").appendChild(video)
        video.play()
    }

    function sessionActive() {
        document.write("Session active. Please come back later.")
    }

    socket.on("backOffer", frontAnswer)
    socket.on("backAnswer", signalAnswer)
    socket.on("sessionActive", sessionActive)
    socket.on("createPeer", makePeer)

})
.catch(err => document.write(err))