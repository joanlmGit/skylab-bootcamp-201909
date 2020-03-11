require('dotenv').config()
const createGarbage=require('.')
//const { env: { DB_URL } } = process
const TEST_DB_URL=process.env.DB_URL
const { expect } = require('chai')
const { errors: { ContentError } } = require('eco-points-utils')
const { database, models: {Garbage } } = require('eco-points-data')



describe('logic - create garbage', () => {
    before(() => database.connect(TEST_DB_URL))

    let  longitude, latitude, status, location, name, id

    beforeEach(async() => {
        longitude= 35.917973
        latitude = 14.409943
        name = "Antonio"
        status= false
        location= {"type": "Point","coordinates": [latitude,longitude]}
         
        await Garbage.deleteMany()
        id= await logic.createGarbage(location,name, status)
        
        
    })

    it('should succeed on correct create point', async() => {
        
        const garbage= await Garbage.findById(id)
        const {gLocation, gName, gStatus}=garbage

        console.log(garbage)

        expect(typeof gLocation).to.equal('string')
        expect(typeof gName).to.equal('string')
        expect(gName).to.equal(name)
        expect(gName.length).to.be.greaterThan(0)
        expect(typeof gStatus).to.equal('boolean')
        expect(gStatus).to.equal(status)

    })

    describe('should unsucceed on create point', async() => {
        const response = "csd5546c4546dfe4s5d"
                
        try{
            await logic.retrieveGarbage(response)
            throw new Error('The Location not exist')
        }catch (error){
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(ContentError)
        }
    })
    // repassar aquest punt
    it('Shoul fail on incorrect location, name, status', ()=>{

        expect(() => createGarbage('carlos')).to.throw(TypeError, 'Carlos is not a location')
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

    


    after(() => Garbage.deleteMany().then(database.disconnect))
})
