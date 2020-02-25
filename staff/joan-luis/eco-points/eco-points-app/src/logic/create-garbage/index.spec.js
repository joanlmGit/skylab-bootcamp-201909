const { env: { REACT_APP_TEST_DB_URL: TEST_DB_URL, REACT_APP_TEST_SECRET: TEST_SECRET } } = process
const createGarbage = require('.')
const { random } = Math
const { database, models: { Garbage } } = require('eco-points-data')
const { errors: { ContentError, CredentialsError } } = require('eco-points-utils')
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
        let location= {"type": "Point","coordinates": [latitude,longitude]}
        

        await Promise.all([Garbage.deleteMany()])

        const pointgarbage = await Garbage.create({ location, name,status })

        id = pointgarbage
        token = jwt.sign({ sub: id }, TEST_SECRET)

        
    })

    it('should succeed on correct create a point of garbage', async () => {
        const garbageId = await createGarbage(location, name, status)
        

        expect(garbageId).toBeDefined()
        expect(garbageId).toBeOfType('string')
        expect(garbageId).toHaveLengthGreaterThan(0)

        const garbage = await garbage.findById(garbageId)

        expect(garbage).toBeDefined()
        expect(garbage.location.coordinates[0]).toString().toBe(latitude) // buscar mejor opcion para comprobar enter valores
        expect(garbage.location.coordinates[0]).toString().toBe(longitude)
        expect(garbage.name).toBe(name)
        expect(garbage.status).toBe(false)
        
    })



    

    afterAll(() => database.disconnect())
})
