require('dotenv').config()
const retrieveAllGarbage = require('../../logic/retrieve-all-garbage')
const fs = require('fs')
//const path = require('path')


/**
* retrieve all image.
* 
* 
* @param {object} objPictures   
* @param {array} picture give all pictures
*/


module.exports = function () {
    let pictures = []
    let objPictures={}
    
    return (async () => {
        let allGarbage = await retrieveAllGarbage()
        try {
            allGarbage.forEach(allGarbage => {
                id = allGarbage._id.toString(allGarbage)
                let path = `./data/images/${id}/`
                let filesPictures=fs.readdirSync(path)
                 
                try{ 
                    fs.statSync(path)
                    objPictures={"id": id, "file": filesPictures}
                    pictures.push(objPictures)
                   
                } catch(err){
                    if (err.code === 'ENOENT'){
                        console.log("This directory don't have file")
                    }
                }
            })
            return await JSON.stringify(pictures)
        } catch (error) {
            return await error.message
        }
    })()
}

