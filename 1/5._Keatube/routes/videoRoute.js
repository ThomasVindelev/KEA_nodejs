const router = require("express").Router()
const uuid = require("uuid").v4
const multer = require("multer")
const upload = multer({ dest: '/videos'})

// todo what data should be inside of each video object
const videos = [{
    title: "Night",
    description: "Hello is night",
    fileName: "7746ff5f-24df-4aa2-8642-90c8e065f621.mp4",
    category: "Nature",
    tags: ["night", "lights"],
    uploadDate: new Date(2020, 3, 26, 08, 43)
}]

for(i = 0; i < 100; i++) {
    videos.push({"id": i+2,
                "fileName": "ahaha",
                "title": `yoyo${i}`})
}

const videosPerPage = 10

router.get("/videos", (req, res) => {
    const page = Number(req.query.page) ? Number(req.query.page) : 1
    const start = (page-1) * videosPerPage
    const end = start + videosPerPage
    // page 1 | 0, 10
    // page 2 | 10, 20
    // etc...
    return res.send({ response: videos.slice(start, end) })
})

router.get("/videos/:videoId", (req, res) => {
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) })
})

router.post("/videos", upload.single("video"), (req, res) => {
    console.log(req.file)
    return res.redirect("/")
})

router.post("/test", (req, res) => {
    console.log(req.body.ore)
    return res.send({ })
})

module.exports = router