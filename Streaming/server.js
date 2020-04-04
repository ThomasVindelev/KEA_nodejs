const express = require("express")
const app = express()
const http = require("http").Server(app)
const io = require("socket.io")(http)
const port = process.env.PORT || 3000

app.use(express.static(__dirname + "./public"))

let clients = 0

io.on("connection", (socket) => {
    socket.on("newClient", () => {
        if (clients < 2) {
            if (clients == 1) {
                this.emit("createPeer")
            }
        } 
        else 
            this.emit("sessionActive")
        clients++
    })
    socket.on("offer", sendOffer)
    socket.on("answer", sendAnswer)
    socket.on("disconnect", disconnect)
})

function disconnect() {
    if (clients > 0) {
        clients--
    }
}

function sendOffer(offer) {
    this.broadcast.emit("backOffer", offer)
}

function sendAnswer(data) {
    this.broadcast.emit("backAnswer", data)
}

http.listen(port, () => {
    console.log(`Active on ${port}`)
})