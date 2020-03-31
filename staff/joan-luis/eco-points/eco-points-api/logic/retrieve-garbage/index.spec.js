require('dotenv').config()
const retreaveGarbage = require('.')
const TEST_DB_URL=process.env.DB_URL
const { expect } = require('chai')
const { random } = Math
const { errors: { ContentError } } = require('eco-points-utils')
const { database, models: { Garbage } } = require('eco-points-data')


describe('logic - retrieve one garbage points', () => {
    before(() => database.connect(TEST_DB_URL))

    let point, longitude, latitude, status, location, name

    beforeEach(async() => {
        longitude= Math.random() *(90-0)+0
        latitude = Math.random() *(180-0)+0
        name = "Antonio"
        status= false
        location= {"type": "Point","coordinates": [longitude,latitude]}
        
        await Garbage.deleteMany()

        point = await Garbage.create({location,name, status})
        id=point.id
    })

    it('should succeed on correct reatrive garbage', async () => {
        
                
        const garbagefind= await retreaveGarbage(id)
        expect(garbagefind).to.exist

        expect(garbagefind.location.coordinates).to.be.an('array')
        expect(garbagefind.location.coordinates).to.have.lengthOf(2)
        expect(garbagefind.location.coordinates[0]).to.equal(longitude)
        expect(garbagefind.location.coordinates[1]).to.equal(latitude)

        expect(garbagefind.name).to.be.an('string')
        expect(garbagefind.name.length).to.greaterThan(0)
        expect(garbagefind.name).to.equal(name)
        
        expect(garbagefind.status).to.be.an('boolean')
        expect(garbagefind.status).not.to.equal('')
        expect(garbagefind.status).to.equal(status)
        

    })

    it('Should an error with incorrect id', async() =>{
        try{
            await retreaveGarbage ("5dfc98504e3dab0f9a90d07a")
            throw new Error('should not reach this point')
        }catch(error){
            expect(error).to.exist
            expect(error.message).to.equal("The location garbage with id 5dfc98504e3dab0f9a90d07a  not exist")
        }

    })

    it('should fail on empty id', () =>
    expect(() =>
        retreaveGarbage('')
    ).to.throw('garbageId is empty or blank'))

    it('should fail on undefined location', () =>
        expect(() =>
            retreaveGarbage(undefined)
        ).to.throw(`undefined is not a string`))
    
    

    after(() => Garbage.deleteMany().then(database.disconnect))
})