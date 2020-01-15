require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const { errors: { ContentError } } = require('eco-points-utils')
const { database, models: { Garbage } } = require('eco-points-data')
const retreaveAllGarbage = require('.')

describe('logic - retrieve all garbage points', () => {
    before(() => database.connect(TEST_DB_URL))

    let longitude, latitude, status, location, name

    beforeEach(async() => {
        
        const allGarbage = await retrieveAllGarbage(location,name, status)

        return Garbage.deleteMany()
    })

    it('should succeed on correct reatrive garbage', async () => {
        

        expect(allGarbage).to.be.undefined

        // TODO more expects
    })

    // TODO other cases

    after(() => User.deleteMany().then(database.disconnect))
})