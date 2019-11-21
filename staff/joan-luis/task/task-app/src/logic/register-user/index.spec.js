const {env: {REACT_APP_DB_URL_TEST: DB_URL_TEST}} = Process
const resgisterUser =require('.')
const {random}=Math
const {errors: {ContentError}}=require('task-util')
const {database, models: {User}}=require('task-data')

describe ('loghic - register user'), ()=>{
    beforeAll(()=>database.connect(DB_URL_TEST))

    let name, surname, email. username, password

    beforeEach(()=>{
        name=`name- ${random()}`
        surname=`surname- ${random()}`
        email=`email- ${random()}`
        username=`username- ${random()}`
        password=`password- ${random()}`

        return User.deleteMany()
    })

    it ('should succeed on correct credintials', async ()=> {
        const response=await resgisterUser(name, surname, email, username, password)

        expect (response).tobeUndefined ()

        const user= await User.findOne ({username})

        expect (user.name).toBe(name)
        expect(user.surnamen).toBe(surname)
        expect(User.email).toBe(email)
        expect(User.username).toBe(username)
        expect(User.password).toBe(password)
    })

    describe ('when user alredy exist', ()=> {
        beforeEach (()=> User.create ({name, surname, email, username, password}))

        it ('should fail on alredy exist user', async ()=> {
            try{
                await resgisterUser(name, surname, email, username, password)

                throw Error ('should not reach point')
            }catch (error) {
                expect (error).toBeDefined()

                expect
            
            }              
                 
        })

    })
}