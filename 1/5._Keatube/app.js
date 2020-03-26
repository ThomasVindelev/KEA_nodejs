const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// makes the server able to share pictures and static content
app.use(express.static("public"))
app.use(express.static("videos"))

// port will default to 3000 if no port is given
const port = process.env.PORT ? process.env.PORT : 3000

// node has access to our filesystem, as opposed to regular javascript
const navbarPage = fs.readFileSync(__dirname + "/public/navbar/navbar.html", "utf8")
const frontPage = fs.readFileSync(__dirname + "/public/frontpage/index.html", "utf8")
const footerPage = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf8")
const playerPage = fs.readFileSync(__dirname + "/public/player/player.html", "utf8")
const uploadPage = fs.readFileSync(__dirname + "/public/upload/upload.html", "utf8")

app.get("/", (req, res) => {
    return res.send(navbarPage + frontPage + footerPage)
})

app.get("/player/:videoid", (req, res) => {
    return res.send(navbarPage + playerPage + footerPage)
})

app.get("/upload", (req, res) => {
    return res.sendFile(navbarPage + uploadPage + footerPage)
})

// every file is it's own module
// import routes
const videosRoute = require("./routes/videoRoute")

// setup routes
app.use(videosRoute)

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error")
    } else {
        console.log("Server launched succesfully on port", port)
    }
})