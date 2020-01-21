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
        longitude= Math.random() *(90-0)+0
        latitude = Math.random() *(180-0)+0
        name = "Antonio"
        status= false
        location= {"type": "Point","coordinates": [latitude,longitude]}
        
        await Garbage.deleteMany()

        point = await createGarbage(location,name, status)

    })

    it('should succeed on correct reatrive garbage', async () => {
        const allGarbage = await retrieveAllGarbage(location,name, status)

        expect(allGarbage).to.be.defined

        
    })

    // TODO other cases

    after(() => User.deleteMany().then(database.disconnect))
})