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

                

                expect(error.message).toBeDefined()
                expect(typeof error.message).toBe('String')
                expect(error.message.length).toBeGrearterThan(0)
                expect(error.message).toBe(`user with username ${username} already exist`)
            }
                 
        })

    })

    it ('should fail on incorrect name, surname, email, password, or expression type and content', ()=>{
        expect(()=>resgisterUser(1)).toThrow (TypeError, '1 is not a string')
        expect(()=>resgisterUser(true)).toThrow(TypeError, 'true is not a string')
        expect(()=> resgisterUser([])).toThrow (TypeError, '[object object] is not a string')
        expect(()=> resgisterUser({})).toThrow(TypeError, 'is not a string')
        expect(()=> resgisterUser(undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(()=> resgisterUser(null)).toThrow(TypeError, 'null is not a string')

        expect(()=> resgisterUser('')).toThrow(ContentError, 'name is empty or blank')
        expect(() => registerUser(' \t\r')).toThrow(ContentError, 'name is empty or blank')

        expect(() => registerUser(name, 1)).toThrow(TypeError, '1 is not a string')
        expect(() => registerUser(name, true)).toThrow(TypeError, 'true is not a string')
        expect(() => registerUser(name, [])).toThrow(TypeError, ' is not a string')
        expect(() => registerUser(name, {})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, null)).toThrow(TypeError, 'null is not a string')

        expect(() => registerUser(name, '')).toThrow(ContentError, 'surname is empty or blank')
        expect(() => registerUser(name, ' \t\r')).toThrow(ContentError, 'surname is empty or blank')

        expect(() => registerUser(name, surname, 1)).toThrow(TypeError, '1 is not a string')
        expect(() => registerUser(name, surname, true)).toThrow(TypeError, 'true is not a string')
        expect(() => registerUser(name, surname, [])).toThrow(TypeError, ' is not a string')
        expect(() => registerUser(name, surname, {})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, surname, undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, surname, null)).toThrow(TypeError, 'null is not a string')

        expect(() => registerUser(name, surname, '')).toThrow(ContentError, 'e-mail is empty or blank')
        expect(() => registerUser(name, surname, ' \t\r')).toThrow(ContentError, 'e-mail is empty or blank')

        expect(() => registerUser(name, surname, email, 1)).toThrow(TypeError, '1 is not a string')
        expect(() => registerUser(name, surname, email, true)).toThrow(TypeError, 'true is not a string')
        expect(() => registerUser(name, surname, email, [])).toThrow(TypeError, ' is not a string')
        expect(() => registerUser(name, surname, email, {})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => registerUser(name, surname, email, undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => registerUser(name, surname, email, null)).toThrow(TypeError, 'null is not a string')

        expect(() => registerUser(name, surname, email, '')).toThrow(ContentError, 'username is empty or blank')
        expect(() => registerUser(name, surname, email, ' \t\r')).toThrow(ContentError, 'username is empty or blank')

        expect(() => registerUser(name, surname, email, username, '')).toThrow(ContentError, 'password is empty or blank')
        expect(() => registerUser(name, surname, email, username, ' \t\r')).toThrow(ContentError, 'password is empty or blank')
    })
    afterAll(()=> User.deleteMany().then(datadase.disconnect))
}