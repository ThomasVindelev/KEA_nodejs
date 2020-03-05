const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

// port will default to 3000 if no port is given

const port = process.env.PORT ? process.env.PORT : 3000

app.get("/video/:videoid", (req, res) => {
    return res.sendFile(`${__dirname}/public/video.html`)
})

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error")
    } else {
        console.log("Server launched succesfully on port", port)
    }
})