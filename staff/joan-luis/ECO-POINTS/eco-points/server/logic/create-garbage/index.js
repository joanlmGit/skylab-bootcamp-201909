const {validate, errors: {ConflictError}}= require('points-utils')
const {models: { Garbage } } = require('point-data')

module.exports=function (location, name, status){

    //validate.is-instance-of(location,"object")
    validate.string(name)
    validate.string.notVoid('name', name)
    validate.boolean(status)
    
    
    return (async ()=> {debugger
        //const garbage= await garbage.findOne( {/* _id?*/} )
        const pointgarbege = await Garbage.create ({location, name, status})

         return idpoint=pointgarbege.id 
         
        
    })()
}
