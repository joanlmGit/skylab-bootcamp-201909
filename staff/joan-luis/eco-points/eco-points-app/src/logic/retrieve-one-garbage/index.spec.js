import logic from '../../logic'

const {env: {REACT_APP_TEST_DB_URL: TEST_DB_URL}}=process

const {errors: {NotFoundError}} = require('eco-points-utils')
const {random}=Math
const {database, models:{Garbage}} = require('eco-points-data')
require ('../../helpers/jest-matchers')
//El test ha de buscar una localizacion cuando se le pasa id por parametro
describe('logic - retrieve one Garbage location', ()=>{
    beforeAll(()=> database.connect(TEST_DB_URL))

    let id, location, lat, lng, name, status

    beforeEach(async ()=> {
        
        await Garbage.deleteMany()
            
            lat=random(90)
            lng=random(180)
            name=`name-${random()}`
            status=false
            location={type:"Point",coordinates: [lat, lng]}
            
            const garbagePoint= await Garbage.create({location, name, status})
            id=garbagePoint.id
    })

    it('Should exist this garbage location', async ()=>{
        debugger
        const location= await logic.retrieveGarbage(id)
        
    })

    it ('Should point garbage exist', async ()=>{
        
    })



    afterAll(()=> Promise.all(Garbage.deleteMany().then(database.disconnect)))

})

