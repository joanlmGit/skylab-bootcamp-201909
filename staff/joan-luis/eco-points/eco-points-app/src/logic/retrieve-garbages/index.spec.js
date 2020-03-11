import logic from '../../logic'

const {env: {REACT_APP_TEST_DB_URL: TEST_DB_URL}}=process
const {errors: {NotFoundError}} = require('eco-points-utils')
const {random}=Math
const {database, models:{Garbage}} = require('eco-points-data')
require ('../../helpers/jest-matchers')

describe('logic - retrieve all locations', ()=>{
    beforeAll(()=> database.connect(TEST_DB_URL))
    
    let garbages, location, lat, lng, name, status

    beforeEach(async ()=> {
        
        Garbage.deleteMany()
        for (let i=0; i<10; i++){
            
            lat=random(90)
            lng=random(180)
            name=`name-${random()}`
            status=false
            location={type:"Point",coordinates: [lat, lng]}
            
            await Garbage.create({location, name, status})
           
        }
    })

    it('Should all locations are exist', async ()=>{

        const allLocations= await logic.retrieveAllGarbage()
                
        expect (allLocations).toBeDefined()
        expect(allLocations.length).toBe(10)

        
        
        for (let i=0; i< allLocations.length;i++){
            expect(`allLocations.${i} = ${allLocations[i].id}`).toBeDefined()
            expect(`allLocations.${i} = ${allLocations[i].id}`).toBeOfType('string')
            expect(`allLocations.${i} = ${allLocations[i].id}`).toHaveLengthGreaterThan(0)
            
            expect(` ${allLocations[i].locations}`).toBeDefined()

            expect(`${allLocations[i].locations.coordinates[0]}`).toBeDefined()
            expect(`${allLocations[i].locations.coordinates[0]}`).toHaveLengthGreaterThan(0)
           
            expect(`${allLocations[i].locations.coordinates[1]}`).toBeDefined()
            expect(`${allLocations[i].locations.coordinates[1]}`).toHaveLengthGreaterThan(0) 
          

            expect(`allLocations.${i} = ${allLocations[i].name}`).toBeDefined()
            expect(`allLocations.${i} = ${allLocations[i].name}`).toBeOfType('string')
            expect(`allLocations.${i} = ${allLocations[i].name}`).toHaveLengthGreaterThan(0)

            expect(`allLocations.${i} = ${allLocations[i].status}`).toBeDefined()
            expect(`allLocations.${i} = ${allLocations[i].status}`).toBeOfType('string')
            expect(`allLocations.${i} = ${allLocations[i].status}`).toHaveLengthGreaterThan(0)         

        }  
    })

    it('Should all locations have diferent values', async ()=>{

        const allLocations= await logic.retrieveAllGarbage()
    
        
        expect (allLocations).toBeDefined()
        expect(allLocations.length).not.toBe(11)

        
        
        for (let i=0; i< allLocations.length;i++){
            expect(`allLocations.${i} = ${allLocations[i].id}`).not.toBe("78287498")
        
            expect(`${allLocations[i].locations.coordinates[0]}`).not.toBe("797997")
            expect(`${allLocations[i].locations.coordinates[1]}`).not.toBe("797997")
            
          
            expect(`allLocations.${i} = ${allLocations[i].name}`).toBeDefined()
            expect(`allLocations.${i} = ${allLocations[i].name}`).not.toBe("jordi")
            expect(`allLocations.${i} = ${allLocations[i].name}`).toBeOfType('string')
            expect(`allLocations.${i} = ${allLocations[i].name}`).toHaveLengthGreaterThan(0)

            expect(`allLocations.${i} = ${allLocations[i].status}`).not.toBe(true)
            expect(`allLocations.${i} = ${allLocations[i].status}`).toBeDefined()
            expect(`allLocations.${i} = ${allLocations[i].status}`).toBeOfType('string')
            expect(`allLocations.${i} = ${allLocations[i].status}`).toHaveLengthGreaterThan(0)         

        }  
    })

    it('Should all locations not exist', async ()=>{
        await Garbage.deleteMany()
        const allLocations= await logic.retrieveAllGarbage()
    
        expect (allLocations).toEqual([])
        expect(allLocations.length).toBe(0)

    })

    afterAll(()=> Promise.all(Garbage.deleteMany().then(database.disconnect)))

})

