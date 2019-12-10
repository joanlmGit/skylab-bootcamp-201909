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
        latitude = Math.floor(Math.random()*(360-180)+180)
        longitude= Math.floor(Math.random()(180-90)+90)
        status = false
        
        let location =[{latitude, longitude}]

        await Promise.all([garbage.deleteMany()])

        const pointgarbage = await Garbage.create({ name, location,status })

        id = pointgarbage.id
        token = jwt.sign({ sub: id }, TEST_SECRET)

        
    })

    it('should succeed on correct create a point of garbage', async () => {
        const garbageId = await createGarbage(location, name, status)
        const {longitude,latitude}=location

        expect(garbageId).toBeDefined()
        expect(ggarbageId).toBeOfType('string')
        expect(garbageId).toHaveLengthGreaterThan(0)

        const garbage = await garbage.findById(garbageId)

        expect(garbage).toBeDefined()
        expect(garbage.latitude).toString().toBe(latitude) // buscar mejor opcion para comprobar enter valores
        expect(garbage.longitude).toBe(longitude)
        expect(garbage.name).toBe(name)
        expect(garbage.status).toBe(false)
        
    })

    // TODO other test cases

    afterAll(() => Promise.all([User.deleteMany(), garbage.deleteMany()]).then(database.disconnect))
})
