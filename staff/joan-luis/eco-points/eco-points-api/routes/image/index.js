
require('dotenv').config()
const { Router} = require('express')
const {  insertPicture } = require('../../logic')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()
const Busboy = require ('busboy')

const router = Router()

router.post('/:idpointGarbage', (req, res) => {
    const { params: { idpointGarbage } } = req
    const busboy = new Busboy({ headers: req.headers })
    busboy.on('file', async (fieldname, file, filename, encoding, mimetype) => {
        filename = idpointGarbage
        await insertPicture(idpointGarbage, file, filename)
    })
    busboy.on('finish', () => {
        res.end("That's all folks!")
    })
    return req.pipe(busboy)
})

module.exports = router