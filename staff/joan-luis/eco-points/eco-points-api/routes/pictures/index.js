require('dotenv').config()
const { Router } = require('express')
const {listPictures} = require('../../logic')
const bodyParser = require('body-parser')


const jsonBodyParser = bodyParser.json()

const router = Router()

debugger
router.post('/',jsonBodyParser, (req, res)=> {
    const {body: dataLocations}=req
    try{
        listPictures(dataLocations)
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