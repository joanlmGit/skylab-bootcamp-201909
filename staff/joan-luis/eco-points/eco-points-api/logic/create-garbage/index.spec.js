require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const { errors: { ContentError } } = require('eco-points-utils')
const { database, models: { User, Garbage } } = require('eco-points-data')
const createGarbage = require('.')
const retrieveGarbage=require('../retrieve-garbage')

describe('logic - create garbage', () => {
    before(() => database.connect(TEST_DB_URL))

    const point, longitude, latitude, status, location, name

    beforeEach(async() => {
        longitude= 35.917973
        latitude = 14.409943
        name = "Antonio"
        status= false
        location= {"type": "Point","coordinates": [latitude,longitude]}
        await Garbage.deleteMany() 
        
        point = await createGarbage(location,name, status)       
    })

    it('should succeed on correct create point', async() => {
    
        expect(response).to.be.undefined

        // TODO more expects
    })

    it('should exist point garbage', async () => {
        const garbage= await retrieveGarbage(response.id)

        expect(garbage.location).to.be(response.location)
        expect(garbage.name).to.be(response.name)
        expect(garbage.status).to.be(response.status)
       
        // TODO more expects
    })


    // TODO other cases

    after(() => User.deleteMany().then(database.disconnect))
})
