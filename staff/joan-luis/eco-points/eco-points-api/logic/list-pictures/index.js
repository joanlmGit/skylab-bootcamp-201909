require('dotenv').config()
const fs = require('fs')
const IMG_URL = process.env.IMG_URL


/**
* retrieve all image.
* 
* 
* @param {object} objPictures   
* @param {array} picture give all pictures
*/


module.exports = function () {
    let pictures = []
    let objPictures = {}
    
    return (async () => {
        try {
            let allpoints = await retrieveAllGarbage()
            
            let allGarbage =allpoints
            if (allGarbage){
               
                allGarbage.forEach((location) => {
                    id = location.id
                    let path = `./data/images/${id}/`
                    let filesPictures = fs.readdirSync(path)
                    filesPictures= IMG_URL+id+"/" + filesPictures
                    
                    if (fs.statSync(path)){
                        objPictures = { "id": id, "file": filesPictures }
                        pictures.push(objPictures) 
                    } 
                    
                })
            }
            return await JSON.stringify(pictures)
            
        } catch (error) {
            if (error.code === 'ENOENT') {
                    console.log("This directory don't have file")
            }
            
            return await error.message
        }
    })()
}

