require('dotenv').config()
const { Router } = require('express')
const {listPictures} = require('../../logic')
const bodyParser = require('body-parser')


const jsonBodyParser = bodyParser.json()

const router = Router()


router.get('/',jsonBodyParser, (req, res)=> {
    debugger
    try{
        listPictures()
            .then((pictures)=> res.status(200).send(pictures))
            .catch(error => {
                const { message } = error
                res.status(500).json({ message})
            })

    }catch({message}) {
        res.status(400).json({message})
    } 
})

module.exports= router