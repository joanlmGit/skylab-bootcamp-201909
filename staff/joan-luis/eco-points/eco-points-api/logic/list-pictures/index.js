require('dotenv').config()
const Logic = require('../../logic')
const fs = require('fs')
const path = require('path')


/**
* Saves  image.
* 
* 
*
* @returns {Promise}   
*/


module.exports = function () {
    let pictures = []
    const allGarbage = Logic.retrieveAllGarbage()
    let id
    return (async () => {
        allGarbage.forEach(garbageId => {
            id = garbageId._id.toString()
            const dir = `./data/images/${id}/`
            if (!fs.existsSync(dir)) {
                fs.readdir(dir, (error, file) => {
                    file.forEach(file => {
                        pictures.push(file)
                    })

                })
            }

        })


        return pictures
    })()
}