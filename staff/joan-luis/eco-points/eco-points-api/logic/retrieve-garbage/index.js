const {validate, errors: {ConflictError}}= require('eco-points-utils')
const {models: { Garbage } } = require('eco-points-data')

module.exports=function (){

    
    
    
    
    return (async ()=> {
        //const garbage= await garbage.findOne( {/* _id?*/} )
        const pointgarbege = await Garbage.findById ({_id:garbageId}, (error, garbage)=>{
            if (error) throw error
            return garbage
        })
        if (!pointgarbege) throw Error(`Location garbage with id ${id} dows not exist`)
         return pointgarbege

        
    })()
}