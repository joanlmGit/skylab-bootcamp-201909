require('dotenv').config()
const createGarbage=require('.')
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
        location= {"type": "Point","coordinates": [longitude,latitude]}
         
        await Garbage.deleteMany()
        id= await createGarbage(location,name, status)
        
        
    })

    it('should succeed on correct create point', async() => {
        
        const garbagefind= await Garbage.findById(id)
        

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

    describe('should unsucceed on create point', async() => {
        const response = "csd5546c4546dfe4s5d"
                
        try{
            await Garbage.findById(response)
            throw new Error('should not reach this point')
        }catch (error){
            expect(error).to.exist
            expect(error).to.be.an.instanceOf(ContentError)
        }
    })

    it('should fail on empty location', () =>
    expect(() =>
        createGarbage('',name, status)
    ).to.throw('is not a Object'))

    it('should fail on undefined location', () =>
        expect(() =>
            createGarbage(undefined,name, status)
        ).to.throw(`undefined is not a Object`))
    

    it('should fail on empty name', () =>
    expect(() =>
        createGarbage(location,'', status)
    ).to.throw('name is empty or blank'))
    
    it('should fail on undefined name', () =>
        expect(() =>
            createGarbage(location,undefined, status)
        ).to.throw(`undefined is not a string`)
    )

    it('should fail on empty status', () =>
    expect(() =>
        createGarbage(location,name,'')
    ).to.throw('is not a boolean')
    )
    it('should fail on undefined status', () =>
        expect(() =>
            createGarbage(location,name,undefined)
        ).to.throw(`undefined is not a boolean`)
    )

    after(() => Garbage.deleteMany().then(database.disconnect))
})
