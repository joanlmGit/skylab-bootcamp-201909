require('dotenv').config()
const { Router } = require('express')
const { createPoint } = require('../../logic')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()

//const {insertPicture} = require('insert-picture')



const router = Router()

router.post('/garbage', jsonBodyParser, (req, res) => {
    const { body: { latitude, longitude, name } } = req

    try {
        createPoint(latitude, longitude, name)
            //.then()=> res.status(201).end())                                    //=> insertPicture(idpoint, file, filename ))
            .then((id) => res.status(201).json({id}))
            .catch(error => {
                const { message } = error

                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})




module.exports = router