const {validate, errors: {ConflictError}}= require('points-utils')
const {models: {garbage}}=require ('point-data')

module.exports=function (location, image, description, status){

    validate.array(location)
    
    validate.string(image)
    validate.string.notVoid('image', image)
    validate.string(description)
    validate.string.notVoid('description', description)
    validate.boolean(status)
    
    
    return (async ()=> {
        await garbage.create ({location, description, status})
    })()
}