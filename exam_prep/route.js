const router = require('express').Router()

router.get('/route', (req, res) => {
    return res.send({ route: 'new' })
})

module.exports = router