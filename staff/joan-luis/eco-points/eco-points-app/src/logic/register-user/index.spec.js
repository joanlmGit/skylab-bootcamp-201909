import logic from '../../logic'

const { env: { REACT_APP_TEST_DB_URL: TEST_DB_URL } } = process

const { random } = Math
const { errors: { ContentError } } = require('eco-points-utils')
const { database, models: { User } } = require('eco-points-data')

describe('logic - register user', () => {
    beforeAll(() => database.connect(TEST_DB_URL))

    let name, surname, email, username, password

    beforeEach( async()=> {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        username = `username-${random()}`
        password = `password-${random()}`
 
        await User.deleteMany()
        
    })

    it('should succeed on correct credentials', async () => {
        const response = await User.create({name, surname, email, username, password})

        expect(response).toBeDefined()
    
        const user = await User.findOne({ surname })

        expect(user).toBeDefined()

        expect(response.name).toBe(name)
        expect(response.surname).toBe(surname)
        expect(response.email).toBe(email)
        expect(response.username).toBe(username)
        expect(response.password).toBe(password)
    })

    describe('when user already exists', () => {
        beforeEach(() => User.create({ name, surname, email, username, password }))

        it('should fail on already existing user', async () => {
            try {
                await User.create({name, surname, email, username, password})

                throw Error('should not reach this point')
            } catch (error) {
                expect(error).toBeDefined()

                expect(error.message).toBeDefined()
                expect(typeof error.message).toBe('string')
                expect(error.message.length).toBeGreaterThan(0)
                expect(error.message).toBe(`user with username ${surname} already exists`)
            }
        })
    })

    it('should fail on incorrect name, surname, email, password, or expression type and content', async() => {
        expect(() => logic.registerUser(1)).toThrow(TypeError, '1 is not a string')
        expect(() => logic.registerUser(true)).toThrow(TypeError, 'true is not a string')
        expect(() => logic.registerUser([])).toThrow(TypeError, ' is not a string')
        expect(() => logic.registerUser({})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => logic.registerUser(undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => logic.registerUser(null)).toThrow(TypeError, 'null is not a string')

        expect(() => logic.registerUser('')).toThrow(ContentError, 'name is empty or blank')
        expect(() => logic.registerUser(' \t\r')).toThrow(ContentError, 'name is empty or blank')

        expect(() => logic.registerUser(name, 1)).toThrow(TypeError, '1 is not a string')
        expect(() => logic.registerUser(name, true)).toThrow(TypeError, 'true is not a string')
        expect(() => logic.registerUser(name, [])).toThrow(TypeError, ' is not a string')
        expect(() => logic.registerUser(name, {})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => logic.registerUser(name, undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => logic.registerUser(name, null)).toThrow(TypeError, 'null is not a string')

        expect(() => logic.registerUser(name, '')).toThrow(ContentError, 'surname is empty or blank')
        expect(() => logic.registerUser(name, ' \t\r')).toThrow(ContentError, 'surname is empty or blank')

        expect(() => logic.registerUser(name, surname, 1)).toThrow(TypeError, '1 is not a string')
        expect(() => logic.registerUser(name, surname, true)).toThrow(TypeError, 'true is not a string')
        expect(() => logic.registerUser(name, surname, [])).toThrow(TypeError, ' is not a string')
        expect(() => logic.registerUser(name, surname, {})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => logic.registerUser(name, surname, undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => logic.registerUser(name, surname, null)).toThrow(TypeError, 'null is not a string')

        expect(() => logic.registerUser(name, surname, '')).toThrow(ContentError, 'e-mail is empty or blank')
        expect(() => logic.registerUser(name, surname, ' \t\r')).toThrow(ContentError, 'e-mail is empty or blank')

        expect(() => logic.registerUser(name, surname, email, 1)).toThrow(TypeError, '1 is not a string')
        expect(() => logic.registerUser(name, surname, email, true)).toThrow(TypeError, 'true is not a string')
        expect(() => logic.registerUser(name, surname, email, [])).toThrow(TypeError, ' is not a string')
        expect(() => logic.registerUser(name, surname, email, {})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => logic.registerUser(name, surname, email, undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => logic.registerUser(name, surname, email, null)).toThrow(TypeError, 'null is not a string')

        expect(() => logic.registerUser(name, surname, email, '')).toThrow(ContentError, 'username is empty or blank')
        expect(() => logic.registerUser(name, surname, email, ' \t\r')).toThrow(ContentError, 'username is empty or blank')

        expect(() => logic.registerUser(name, surname, email, username, '')).toThrow(ContentError, 'password is empty or blank')
        expect(() => logic.registerUser(name, surname, email, username, ' \t\r')).toThrow(ContentError, 'password is empty or blank')
    })

    // TODO other cases

    afterAll(() => User.deleteMany().then(database.disconnect))
})
