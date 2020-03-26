const fullUrl = window.location.href
const videoId = fullUrl.substr(fullUrl.lastIndexOf("/") + 1)

$("#video").append('<source src="/' + videoId + '" type="video/mp4">')

$.get(`/videos/${videoId}`, (data) => {

    const { path } = data.response

    console.log(data)

    const player = `<source src="${path}" type="video/mp4">`

    $("#video").append(player)

    $(".description").append(data.response.description)

})