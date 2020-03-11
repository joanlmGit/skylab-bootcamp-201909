require('dotenv').config()
//const { env: { TEST_DB_URL } } = process
const TEST_DB_URL=process.env.DB_URL
const { expect } = require('chai')
const { errors: { ContentError } } = require('eco-points-utils')
const { database, models: { Garbage } } = require('eco-points-data')
const retreaveAllGarbage = require('.')

describe('logic - retrieve all garbage points', () => {
    before(() => database.connect(TEST_DB_URL))

    let  longitude, latitude, status, location, name

    beforeEach(async() => {
        
         Garbage.deleteMany()
        
        for (let i=0; i<10; i++){

            longitude= Math.random() *(90-0)+0
            latitude = Math.random() *(180-0)+0
            name = "Antonio"
            status= false
            location= {"type": "Point","coordinates": [latitude,longitude]}
             await Garbage.create(location, name, status)
        }
    })

    it('should succeed on correct reatrive garbage', async () => {
        const allGarbage = await retrieveAllGarbage()

        expect(allGarbage).to.exist

        expect(allGarbage).to.be.a('array').lengthOf(10)
        expect(allGarbage[0].location).to.have.property('coordinates')
        expect(allGarbage[0].name).to.be.a('string')
        expect(allGarbage[0].status).to.be.a('boolean')
        
    })

    

    after(() => database.disconnect())
})