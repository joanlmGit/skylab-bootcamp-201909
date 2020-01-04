
require('dotenv').config()
const { Router} = require('express')
const {  insertPicture } = require('../../logic')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()
const Busboy = require ('busboy')

const router = Router()

router.post('/save/:id', (req, res) => {
    const { params: { id } } = req
    const busboy = new Busboy({ headers: req.headers })
    busboy.on('file', async (fieldname, file, filename, encoding, mimetype) => {
        filename = id
        await insertPicture(id, file, filename)
    })
    busboy.on('finish', () => {
        res.end("That's all folks!")
    })
    return req.pipe(busboy)
})

module.exports = router