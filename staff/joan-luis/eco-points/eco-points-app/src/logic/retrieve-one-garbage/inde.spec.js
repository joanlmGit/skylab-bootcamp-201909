const {env: {REACT_APP_TEST_DB_URL: TEST_DB_URL}}=process
const retrieveGarbages=require('.')
const {errors: {NotFoundError}} = require('eco-points-utils')
const {random}=Math
const {database, models:{Garbage}} = require('eco-points-data')
require ('../../helpers/jest-matchers')
//El test ha de buscar una localizacion cuando se le pasa id por parametro
describe('logic - retrieve all locations', ()=>{
    beforeAll(()=> database.connect(TEST_DB_URL))

    let location, lat, lng, name, status

    beforeEach(async ()=> {
        
        await Garbage.deleteMany()

        const allGarbage= []
        

        for (let i=0; i<10; i++){
            
            lat=random(90)
            lng=random(180)
            name=`name-${random()}`
            status=false
            location={type:"Point",coordinates: [lat, lng]}
            
            await allGarbage.push(Garbage.create(location, name, status))
        }
    })

    it('Should all locations were created', async ()=>{

        const allLocations= await retrieveGarbages()
        expect (allLocations).toBeDefined()
        expect(allLocations).ToHaveLength(10)

        allLocations.beforeEach(point =>{
            expect(point.location.coordinates).toBeDefined()
            expect(point.location.coordinates).toBeOfType(Array)
            expect(point.location.coordinates).ToHaveLengthGreaerThan(0)

            expect(point.name).toBeDefined()
            expect(point.name).toBeOfType('string')
            expect(point.name).ToHaveLengthGreaerThan(0)

            expect(point.status).toBeDefined()
            expect(point.status).toBeOfType('boolean') // asegurar como ha de testear el tipo ed dato
            expect(point.status).ToHaveLengthGreaerThan(0)

        })
    })

    it ('Should point garbage exist', async ()=>{
        
    })



    afterAll(()=> Promise.all(Garbage.deleteMany().then(database.disconnect)))

})

