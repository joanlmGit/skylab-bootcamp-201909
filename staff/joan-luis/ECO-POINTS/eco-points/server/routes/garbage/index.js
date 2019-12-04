const { Router } = require('express')
const { createPoint  } = require('../../logic')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()

const router = Router()

router.post('/', jsonBodyParser, (req, res) => {
    const { body: { location, name, status} } = req
    debugger
    try {
        createPoint(location, name, status)
            .then((idpoint) => res.status(201).end())
            .catch(error => {
                const { message } = error

                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})


module.exports = router