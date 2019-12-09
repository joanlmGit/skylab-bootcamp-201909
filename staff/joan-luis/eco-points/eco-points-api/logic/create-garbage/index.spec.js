require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const { errors: { ContentError } } = require('eco-points-utils')
const { database, models: { User, Garbage } } = require('eco-points-data')
const createGarbage = require('.')

describe('logic - create garbage', () => {
    before(() => database.connect(TEST_DB_URL))

    let longitude, latitude, status, location, name

    beforeEach(() => {
        longitude= `${random()}`
        latudude = `${random()}`
        description = `description-${random()}@mail.com`
        //status= `false-${random()}`
        

        return Garbage.deleteMany()
    })

    it('should succeed on correct create point', async () => {
        const response = await createGarbage(location,description, status)

        expect(response).to.be.undefined

        // TODO more expects
    })

    // TODO other cases

    after(() => User.deleteMany().then(database.disconnect))
})
