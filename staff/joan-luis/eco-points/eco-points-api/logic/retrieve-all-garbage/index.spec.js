require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const { errors: { ContentError } } = require('eco-points-utils')
const { database, models: { Garbage } } = require('eco-points-data')
const retreaveAllGarbage = require('.')

describe('logic - retrieve all garbage points', () => {
    before(() => database.connect(TEST_DB_URL))

    let point, longitude, latitude, status, location, name

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
        const allGarbage = await retrieveAllGarbage(location,name, status)

        expect(allGarbage).to.be.defined

        expect(allGarbage.length).to.equal(10)
        //todo more spect        
    })

    // TODO other cases

    after(() => User.deleteMany().then(database.disconnect))
})