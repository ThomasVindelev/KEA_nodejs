const express = require('express')
const app = express()

const PORT = 3000

app.use(express.static('public'))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const rate_limiter = require('express-rate-limit')

const limit = rate_limiter({
    max: 10,
    windowMs: 10000
})

app.use('/home', limit)

app.get('/', (req, res) => {
    res.send()
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server is running on port ${PORT}`)
    }
})