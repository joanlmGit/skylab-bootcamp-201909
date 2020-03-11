const {validate, errors: {ConflictError}}= require('eco-points-utils')
const {models: { Garbage } } = require('eco-points-data')


/**
* @param {ObjectId} location geolocation point garbage
* @param {Stream} name user that add geolocation 
* @param {boolean} status this param is false, mean is a dirty point, true is a clean point 
 */
module.exports=function (location, name, status){

    
    validate.string(name)
    validate.string.notVoid('name', name)
    validate.boolean(status)
    //validate.instanceOf(location,{})
    validate.instanceOf(Object,location)
    
    return (async ()=> {
        //const garbage= await garbage.findOne( {/* _id?*/} )
        const pointgarbege = await Garbage.create ({location, name, status})
        
         return pointgarbege.id 
    })()
}
