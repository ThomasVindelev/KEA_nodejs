const express = require('express')
const app = express()

const PORT = 3000

app.use(express.static('public'))

app.get('/home', (req, res) => {
    return res.send({ answer: 'Hello' })
})

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/public/index.html')
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server is running on port ${PORT}`)
    }
})