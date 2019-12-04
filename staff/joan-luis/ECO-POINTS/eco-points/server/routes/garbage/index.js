require('dotenv').config()

const { Router} = require('express')
const { createPoint  } = require('../../logic')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()
const  Busboy = require('busboy')
const fs=require('fs')
const path= require('path')


const router = Router()

router.post('/', jsonBodyParser, (req, res) => {
    const { body: { location, name, status} } = req
    debugger
    try {
        createPoint(location, name, status)
            .then(idpoint=>{debugger})
            .then (() => res.status(201).end())
            .catch(error => {
                const { message } = error

                res.status(500).json({ message })
            })
    } catch ({ message }) {
        res.status(400).json({ message })
    }
})
router.post('/fileupload', function (req, res) {
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
  
      var saveTo = path.join(__dirname, IMG_URL+ '/' +id+'/'+ filename);
      file.pipe(fs.createWriteStream(saveTo));
    });
  
    busboy.on('finish', function() {
      res.writeHead(200, { 'Connection': 'close' });
      res.end("That's all folks!");
    });
      
    return req.pipe(busboy);   
});

module.exports = router