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

    const  longitude, latitude, status, location, name

    beforeEach(async() => {
        longitude= 35.917973
        latitude = 14.409943
        name = "Antonio"
        status= false
        location= {"type": "Point","coordinates": [latitude,longitude]}
        return Garbage.deleteMany() 
        
               
    })

    it('should succeed on correct create point', async() => {
        const response = await Garbage.create(location,name, status)
                
        expect(response).to.be.undefined

        const garbage= await retrieveGarbage(response.id)

        expect(garbage.location[0]).to.equal(response.location[0])
        expect(garbage.location[1]).to.equal(response.location[1])
        expect(garbage.name).to.equal(response.name)
        expect(garbage.status).to.equal(response.status)

        // TODO more expects
    })

    

    after(() => User.deleteMany().then(database.disconnect))
})
