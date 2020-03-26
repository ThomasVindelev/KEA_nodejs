$.get("videos?page=1", (response) => {
    console.log(response.response)
    response.response.map((video) => {
        $("#video-gallery")
        .append(`<a href="/player/${video.fileName}">${video.title}</a><br>`)
    })
})

// <a href="/player/7746ff5f-24df-4aa2-8642-90c8e065f621.mp4">Night</a>
// <a href="/player/Sunrise.mp4">Sunrise</a>