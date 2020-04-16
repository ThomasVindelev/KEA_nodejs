// CommonJS
const Swal = require('sweetalert2')

let fileValid = false

function validateForm() {
    const title = document.forms.videoUpload.title.value
    const description = document.forms.videoUpload.description.value

    if (title.length < 8 || title.length > 64) {
        console.log("Title not long enough")
        return false
    }

    if (description > 2048) {
        return false
    }

    return true && fileValid
}

function handleFileUpload(files) {
    const file = files[0]
    const mimeTypeArray = file.type.split("/")

    if (mimeTypeArray[0] !== "video") {
        fileValid = false
        return
    }

    const fileSize = file.size
    const twoGBFileLimit = 2147482648

    if (fileSize > twoGBFileLimit) {
        fileValid = false
        return
    }

    fileValid = true

}