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

//const dataLocations=[{"id":"5e4dad69648d0a001725b730","locations":{"coordinates":[1.9766294000000002,41.2800161],"type":"Point"},"names":"Joan"}]
module.exports = function (dataLocations) {
    let pictures = []
    let objPictures = {}
    
    return (async () => {
        try {
            //let allpoints = await retrieveAllGarbage()
            let allpoints=dataLocations
            let allGarbage = dataLocations
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

