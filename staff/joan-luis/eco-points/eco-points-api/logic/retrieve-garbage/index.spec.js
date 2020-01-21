require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random } = Math
const { errors: { ContentError } } = require('eco-points-utils')
const { database, models: { Garbage } } = require('eco-points-data')
const retreaveGarbage = require('.')

describe('logic - retrieve one garbage points', () => {
    before(() => database.connect(TEST_DB_URL))

    let point, longitude, latitude, status, location, name

    beforeEach(async() => {
        longitude= Math.random() *(90-0)+0
        latitude = Math.random() *(180-0)+0
        name = "Antonio"
        status= false
        location= {"type": "Point","coordinates": [latitude,longitude]}
        
        await Garbage.deleteMany()

        point = await createGarbage(location,name, status)
        id=point.id
    })

    it('should succeed on correct reatrive garbage', async () => {
        const garbage = await retrieveGarbage(id)

        expect(point).to.exist
        expect(point.location).to.equal(location)
        expect(point.name).to.equal(name)
        expect(point.status).to.equal(status)

    })

    it('Should an error with incorrect id', async =>{
        try{
            await retrieveGarbage ("5dfc98504e3dab0f9a90d07a")
        }catch(error){
            expect(error).to.exist
            expect(error.message).to.equal("The location garbage with id 5dfc98504e3dab0f9a90d07a not exist")
        }

    })

    it('Should fail on empty location id', ()=> {
        expect(()=>
            retrieveGarbage('')
        ).to.throw(`Location id is empty or blank`)
    })

    it('Should fail on undefined location id', ()=>
        expect(()=>
            reatrieveGarbage(undefined)
        ).to.throw(`The value of location id is undefined`)
    )

    // TODO other cases

    after(() => User.deleteMany().then(database.disconnect))
})