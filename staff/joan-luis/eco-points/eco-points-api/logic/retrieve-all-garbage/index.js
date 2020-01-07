const {validate, errors: {ConflictError}}= require('eco-points-utils')
const {models: { Garbage } } = require('eco-points-data')

module.exports=function (){

    
    
    
    
    return (async ()=> {
        //const garbage= await garbage.findOne( {/* _id?*/} )
        const allGarbege = await Garbage.find ((error, garbages)=>{
            if (error) throw error
            return garbages
        })
        if (!allGarbege) throw Error(`Location garbage with id ${id} dows not exist`)
         return allGarbege

        
    })()
}