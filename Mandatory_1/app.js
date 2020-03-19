const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT ? process.env.PORT: 3000

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Server failed")
    } else {
        console.log(`Launched on port ${port}`)
    }
})

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/index.html")
})

app.get("/commands", (req, res) => {
    return res.sendFile(__dirname + "/public/commands.html")
})

app.get("/REST", (req, res) => {
    return res.sendFile(__dirname + "/public/REST.html")
})

app.get("/syntax", (req, res) => {
    return res.sendFile(__dirname + "/public/syntax.html")
})

app.get("/jQuery", (req, res) => {
    return res.sendFile(__dirname + "/public/jQuery.html")
})

app.get("/new", (req, res) => {
    return res.sendFile(__dirname + "/public/new.html")
})