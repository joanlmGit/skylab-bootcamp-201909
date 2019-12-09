require('dotenv').config()
const { validate } = require('points-utils')
const { ObjectId, models: { garbage } } = require('point-data')
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
        //const user = await User.findById(id)
        //if (!user) throw new Error(` with id ${id} not found`)

        //const wish = user.wishes.find(wish => wish.id === wishId)        
        //if (!wish) throw new NotFoundError(`user does not have task with id ${wishId}`)
        
        const dir = `./routes/garbage/imagenes/${id}`
        if (!fs.existsSync(dir)){debugger
            fs.mkdirSync(dir)
        }
        let saveTo = path.join(__dirname, `../../routes/garbage/imagenes/${id}/${filename}.png`)
        return file.pipe(fs.createWriteStream(saveTo))            
    })()
}
