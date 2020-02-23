require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const { errors: { ContentError } } = require('eco-points-utils')
const { database, models: {  Garbage } } = require('eco-points-data')
const createGarbage = require('.')


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
        const response = await createGarbage(location,name, status)
                
        const garbage= await retrieveGarbage(response)
        const {gLocation, gName, gStatus}=garbage

        expect(gLocation).to.have.property('coordinates').with.lengthOf(2)
        expect({gLocation: {coordinates: []}}).to.nested.include({'Location.coordinates[1]': longitude});

        expect(gName).to.be.a('string')
        expect(gName).to.equal(name)
        expect(gStatus).to.be.a('boolean')
        expect(gStatus).to.equal(status)

    })

    describe('should unsucceed on create point', async() => {
        const response = "csd5546c4546dfe4s5d"
                
        try{
            await Garbage.findById(response)
            throw new Error('The Location not exist')
        }catch (error){
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(ContentError)
        }
    })
    // repassar aquest punt
    it('Shoul fail on incorrect location, name, status', ()=>{

        expect(() => createGarbage('carlos')).to.throw(TypeError, '1 is not a location')
        expect(() => createGarbage(true)).to.throw(TypeError, 'true is not a location')
        expect(() => createGarbage(undefined)).to.throw(TypeError, 'undefined is not a Location')
        expect(() => createGarbage(null)).to.throw(TypeError, 'null is not a Location')

        expect(() => createGarbage('')).to.throw(ContentError, 'Location is empty or blank')
        expect(() => createGarbage(' \t\r')).to.throw(ContentError, 'Location is empty or blank')

        expect(() => createGarbage(name, 1)).to.throw(TypeError, '1 is not a string')
        expect(() => createGarbage(name, true)).to.throw(TypeError, 'true is not a string')
        expect(() => createGarbage(name, [])).to.throw(TypeError, ' is not a string')
        expect(() => createGarbage(name, {})).to.throw(TypeError, '[object Object] is not a string')
        expect(() => createGarbage(name, undefined)).to.throw(TypeError, 'undefined is not a string')
        expect(() => createGarbage(name, null)).to.throw(TypeError, 'null is not a string')

        expect(() => createGarbage(status, '')).to.throw(ContentError, 'password is empty or blank')
        expect(() => createGarbage(status, ' \t\r')).to.throw(ContentError, 'password is empty or blank')
        expect(() => createGarbage(status, [])).to.throw(TypeError, ' is not a string')
        expect(() => createGarbage(status, {})).to.throw(TypeError, '[object Object] is not a string')
        expect(() => createGarbage(status, undefined)).to.throw(TypeError, 'undefined is not a string')
        expect(() => createGarbage(status, null)).to.throw(TypeError, 'null is not a string')

    })

    


    after(() => User.deleteMany().then(database.disconnect))
})
