require('dotenv').config()
const { Router } = require('express')
const {createPoint, retrieveGarbage, retrieveAllGarbage} = require('../../logic')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()





const router = Router()

router.get('/one/:garbageId',jsonBodyParser, (req, res)=> {
    //let garbageId =req.params.garbageId
    const {  params: { garbageId }}=req
    debugger
    try{
        retrieveGarbage(garbageId)
            .then((garbage)=> res.status(200).send(garbage))
            .catch(error => {
                const { message } = error
                res.status(500).json({ message })
            })

    }catch({message}) {
        res.status(400).json({message})
    }
    
})


router.get('/',jsonBodyParser, (req, res)=> {
    
    
    try{
        retrieveAllGarbage()
            .then((garbages)=> res.status(200).send(garbages))
            .then(()=> console.log("Successful to sent all data garbage"))
            .catch(error => {
                const { message } = error
                res.status(500).json({ message })
            })

    }catch({message}) {
        res.status(400).json({message})
    }
    
})


router.post('/', jsonBodyParser, (req, res) => {
    const { body: { location, name, status } } = req 
    
    
    try {
        
        createPoint(location, name, status)
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