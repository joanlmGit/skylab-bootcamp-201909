
const {models: { Garbage } } = require('eco-points-data')

module.exports=function (){

    

    return (async ()=> {
        
        const allGarbege = await Garbage.find ({"__v":0}).lean()
        if (!allGarbege) throw Error(`Locations garbage not exist`)
         
        allGarbege.forEach(point=>{
            point.id=point._id
            delete point._id
            point.locations=point.location
            delete point.location
            point.names=point.name
            delete point.name
            delete point.status
            delete point.__v
        })
        
        return  await JSON.stringify(allGarbege)
    })()
}