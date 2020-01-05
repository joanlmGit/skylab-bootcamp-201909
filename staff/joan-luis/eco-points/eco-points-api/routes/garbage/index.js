require('dotenv').config()
const { Router } = require('express')
const { createPoint } = require('../../logic')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()

//const {insertPicture} = require('insert-picture')



const router = Router()

router.post('/', jsonBodyParser, (req, res) => {
    const { body: { location, name, status } } = req

    try {
        debugger
        createPoint(location, name, status)
            //.then()=> res.status(201).end())  //=> insertPicture(idpoint, file, filename ))
            .then((id) => {
                res.status(201)
                res.json({id:id})})
            .catch(error => {
                const { message } = error

                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})




module.exports = router