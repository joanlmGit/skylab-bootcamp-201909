require('dotenv').config()
const Logic = require('../../logic')
const fs = require('fs')
const path = require('path')


/**
* retrieve all image.
* 
* 
*
* @returns {Promise}   
*/


module.exports = function () {
    let pictures = []

    
    return (async () => {
        const allGarbage = await Logic.retrieveAllGarbage
        try {
            allGarbage.forEach(allGarbage => {
                id = allGarbage._id.toString()
                path = `./data/images/${id}/`

                fs.readdir(path, (error, file) => {
                    if (error) console.log(error.message)
                    file.forEach(file => {
                        pictures.push(file)
                    })

                })
            })
            return  pictures
        } catch (error) {

        }
    })()
}