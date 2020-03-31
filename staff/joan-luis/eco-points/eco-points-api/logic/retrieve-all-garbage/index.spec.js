require('dotenv').config()
const retreaveAllGarbage = require('.')
const TEST_DB_URL=process.env.DB_URL
const { expect } = require('chai')
const { errors: { ContentError } } = require('eco-points-utils')
const { database, models: { Garbage } } = require('eco-points-data')


describe('logic - retrieve all garbage points', () => {
    before(() => database.connect(TEST_DB_URL))

    let  longitude, latitude, status, location, name, allGarbage
    let newGarbages=[]
    beforeEach(async() => {
        
         Garbage.deleteMany()
        
        for (let i=0; i<10; i++){

            longitude= Math.random() *(90-0)+0
            latitude = Math.random() *(180-0)+0
            name = `Antonio-${Math.random()}`
            status= false
            location= {"type": "Point","coordinates": [latitude,longitude]}
            
            let points =await Garbage.create({location, name, status})
            
        }
        
        //s'hauria de fer un nou plantejament
    })

    it('should succeed on correct reatrive garbage', async () => {
        const garbagefind = await retreaveAllGarbage()
        expect(garbagefind).to.exist
             
        
    })

    it('Should error not exist any location', async() =>{
        await Garbage.deleteMany()
       
        let allvoid=await retreaveAllGarbage ()
        expect(allvoid).to.equal('[]')

    })
    

    after(() => Garbage.deleteMany().then(database.disconnect))
})