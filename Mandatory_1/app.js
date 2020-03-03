const app = require("express")()

app.listen(3000)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/commands", (req, res) => {
    res.sendFile(__dirname + "/public/commands.html")
})

app.get("/REST", (req, res) => {
    res.sendFile(__dirname + "/public/REST.html")
})

app.get("/syntax", (req, res) => {
    res.sendFile(__dirname + "/public/syntax.html")
})