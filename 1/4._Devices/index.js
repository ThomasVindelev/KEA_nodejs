const express = require("express")
// const bodyParser = require("body-parser")

const app = express()

// this prevents an object returned by the req being undefined
// this is an old way of doing it - bodyparser is now included in express
// app.use(bodyParser.urlencoded({extended: true}))

app.use(express.urlencoded({extended: true}))

app.use(express.json())

let devices = [
    {id: 1, type: "Smartphone"},
    {id: 2, type: "Laptop"}
]

let nextDeviceId = 3

app.get("/", (req, res) => {
    const info = {
        response: "This API handles information requests about new age technology like personal computers and smartphones",
    }
    return res.send(info)
})

app.get("/device/:id", (req, res) => {
    const device = devices.find(device => device.id === Number(req.params.id))
    return res.send({ response: device })
})

app.get("/devices", (req, res) => {
    const dvs = Object.assign({}, devices)
    // return res.send(dvs)
    return res.send({ response: devices })
})

app.post("/test", (req, res) => {
    console.log(req.body)
    return res.send({})
})

app.post("/devices", (req, res) => {
    let newDevice = req.body
    if(!newDevice.type) {
        return res.status(400).send({response: "Missing the device type"})
    }
    // const maxId = devices.reduce((previous, current) => {
    //     if (current.id > previous.id) {
    //         return current.id
    //     } else {
    //         return previous.id
    //     }
    // })
    newDevice.id = nextDeviceId++
    devices.push(newDevice)
    return res.send({response: devices})
})

app.put("/devices/:id", (req, res) => {
    devices.find(device => device.id === Number(req.params.id)).type = req.body.type
    return res.send({response: devices})
})

app.put("/devices2/:id", (req, res) => {
    const foundIndex = devices.findIndex(device => device.id === Number(req.params.id))
    delete req.body.id
    const newDevice = { ...devices[foundIndex], ...req.body }
    devices[foundIndex] = newDevice
    console.log(newDevice)
    return res.send({response: newDevice})
})

app.delete("/devices/:id", (req, res) => {
    devices = devices.filter(device => device.id !== Number(req.params.id))
    return res.send({response: devices})
})

const server = app.listen(3000, (error) => {
    if (error) {
        console.log("Error running the server")
    }
    console.log("Server running on port", server.address().port)
})

// npm run [scriptname]