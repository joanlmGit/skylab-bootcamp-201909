const fs = require('fs') 
const { env: { IMG_URL } } = process
const { module: {Garbage} }=require('point-data')
const {_id}=Garbage

module.exports = () => {

    fs.mkdirSync = function (IMG_URL) { 
        try { fs.mkdirSync(_id); 
        } catch(e) { 
            if ( e.code != 'EEXIST' ) throw e; 
        }
    }
    fs.open('IMG_URL/' + _id)
    const ws=fs.createWriteStream('/'+_id)
    fs.pipe(ws)
} 



