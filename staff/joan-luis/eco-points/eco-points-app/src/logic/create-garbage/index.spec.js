import logic from '../../logic'
const { env: { REACT_APP_TEST_DB_URL: TEST_DB_URL, REACT_APP_TEST_SECRET: TEST_SECRET } } = process
const createGarbage = require('.')
const { random } = Math
const { database, models: { Garbage } } = require('eco-points-data')
const { errors: { ContentError } } = require('eco-points-utils')
const jwt = require('jsonwebtoken')
require('../../helpers/jest-matchers')

describe('logic - create point', () => {
    beforeAll(() => database.connect(TEST_DB_URL))
    
    let id, latitude, longitude, name,status
    
    beforeEach(async () => {
        name = `name-${random()}`
        latitude = random(180)
        longitude= random(90)
        status = false
        let location= {coordinates: [latitude,longitude], type: "Point"}
    
        await Promise.all([Garbage.deleteMany()])
        const newGarbage = await Garbage.create({location, name, status})
        id=newGarbage.id
             
    })

    it('should succeed on correct create a point of garbage', async () => {
             
        

        expect(id).toBeDefined()
        expect(id).toBeOfType('string')
        expect(id).toHaveLengthGreaterThan(0)

        const existGarbage = await Garbage.findById(id)

        expect(existGarbage).toBeDefined()
        expect(existGarbage.location.coordinates[0]).toBe(latitude) // buscar mejor opcion para comprobar enter valores
        expect(existGarbage.location.coordinates[1]).toBe(longitude)
        expect(existGarbage.name).toBe(name)
        expect(existGarbage.status).toBe(false)
        
    })
    afterAll(()=> Promise.all(Garbage.deleteMany().then(database.disconnect)))

})
