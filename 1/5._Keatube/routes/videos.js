const router = require("express").Router()
const uuid = require("uuid").v4
const crypto = require("crypto")



const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "videos/")
    },
    filename: (req, file, cb) => {
        
        const fileName = crypto.randomBytes(30).toString("hex")
        const mimetypeArray = file.mimetype.split("/")
        if (mimetypeArray[0] === "video") {
            const extension = mimetypeArray[mimetypeArray.length - 1]
            cb(null, fileName + "." + extension)
        } else {
            cb("Not a video. Mimetype " + file.mimetype)
        }
    }
})
const upload = multer({ storage: storage })

// todo what data should be inside of each video object
const videos = [{
    title: "Night",
    description: "Hello is night",
    fileName: "7746ff5f-24df-4aa2-8642-90c8e065f621.mp4",
    category: "Nature",
    tags: ["night", "lights"],
    uploadDate: new Date(2020, 3, 26, 08, 43)
}]

// for(i = 0; i < 100; i++) {
//     videos.push({"id": i+2,
//                 "fileName": "ahaha",
//                 "title": `yoyo${i}`})
// }

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
    
    let errors = []

    const video = {
            title: req.body.title || "",
            description: req.body.description || "",
            fileName: req.file.filename,
            category: req.body.category || "unknown",
            tags: req.body.tags.split(/\s[,s]\s*/) /* regex */,
            uploadDate: new Date()
    }

    if (video.title.length < 8 || video.title.length > 64) {
        errors.push("Title not between 8 and 64 characters")
    }

    if (video.description.length > 2048) {
        errors.push("Description more than 2048 characters")
    }

    if (errors.length > 0) {
        return ({ response: errors }) 
    } else {
        videos.push(video)
        return res.redirect("/player/" + video.fileName)
    }
})

router.post("/test", (req, res) => {
    return res.send({ })
})

module.exports = router