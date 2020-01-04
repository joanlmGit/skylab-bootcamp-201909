require('dotenv').config()
const { validate } = require('eco-points-utils')
const { ObjectId, models: { garbage } } = require('eco-points-data')
const fs = require('fs')
const path = require('path')


/**
* Saves  image.
* 
* @param {ObjectId} id 
* @param {Stream} file 
* @param {Sting} filename 
*
* @returns {Promise}   
*/


module.exports = function (id, file, filename) {
    validate.string(id)
    validate.string.notVoid('id', id)
    if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`)

    
    
    return (async () => {
        
        const dir = `./data/images/${id}`
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir)
        }
        let saveTo = path.join(__dirname, `../../data/images/${id}/${filename}.png`)
        return file.pipe(fs.createWriteStream(saveTo))            
    })()
}