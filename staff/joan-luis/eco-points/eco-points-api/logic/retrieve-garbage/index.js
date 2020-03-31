const {validate, errors: {ConflictError}}= require('eco-points-utils')
const {models: { Garbage } } = require('eco-points-data')

module.exports=function (garbageId){

    validate.string(garbageId)
    validate.string.notVoid('garbageId', garbageId)
       
    
    return (async ()=> {
        //const garbage= await garbage.findOne( {/* _id?*/} )
        const pointgarbege = await Garbage.findById ({_id:garbageId}, (error, garbage)=>{
            if (error) throw error
            return garbage
        })
        if (!pointgarbege) throw Error(`The location garbage with id ${garbageId}  not exist`)
         return pointgarbege

        
    })()
}