const fullUrl = window.location.href
const videoId = fullUrl.substr(fullUrl.lastIndexOf("/") + 1)

$("#video").append('<source src="/videos/' + videoId + '" type="video/mp4">')