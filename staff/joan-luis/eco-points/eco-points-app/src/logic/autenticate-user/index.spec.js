import logic from '../../logic'

const { env: { REACT_APP_TEST_DB_URL: TEST_DB_URL } } = process
const { random } = Math
const { errors: { ContentError, CredentialsError } } = require('eco-points-utils')
const { database, models: { User } } = require('eco-points-data')

describe('logic - authenticate user', () => {
    
    beforeAll(() => database.connect(TEST_DB_URL))

    let id, name, surname, email, username, password

    beforeEach(async () => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        username = `username-${random()}`
        password = `password-${random()}`

        await User.deleteMany()

        const user = await User.create({name, surname, email, username, password })
        id = user.id
        
    })

    it('should succeed on correct credentials', async () => {
        const token = await logic.authenticateUser(username, password)

        expect(token).toBeDefined()
        expect(typeof token).toBe('string')
        expect(token.length).toBeGreaterThan(0)

        const [, payload,] = token.split('.')

        const { sub } = JSON.parse(atob(payload))

        expect(id).toBe(sub)
    })

    describe('when wrong credentials', () => {
        it('should fail on wrong username', async () => {
            const username = 'wrong'

            try {
                await logic.authenticateUser(username, password)

                throw new Error('should not reach this point')
            } catch (error) {
                expect(error).toBeDefined()
                expect(error).toBeInstanceOf(CredentialsError)

                const { message } = error
                expect(message).toBe(`wrong credentials`)
            }
        })

        it('should fail on wrong password', async () => {
            const password = 'wrong'

            try {
                await logic.authenticateUser(username, password)

                throw new Error('should not reach this point')
            } catch (error) {
                expect(error).toBeDefined()
                

                const { message } = error
                expect(message).toBe(`wrong credentials`)
            }
        })
    })

    it('should fail on incorrect name, surname, email, password, or expression type and content', () => {
        expect(() => logic.authenticateUser(1)).toThrow(TypeError, '1 is not a string')
        expect(() => logic.authenticateUser(true)).toThrow(TypeError, 'true is not a string')
        expect(() => logic.authenticateUser([])).toThrow(TypeError, ' is not a string')
        expect(() => logic.authenticateUser({})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => logic.authenticateUser(undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => logic.authenticateUser(null)).toThrow(TypeError, 'null is not a string')

        expect(() => logic.authenticateUser('')).toThrow(ContentError, 'username is empty or blank')
        expect(() => logic.authenticateUser(' \t\r')).toThrow(ContentError, 'username is empty or blank')

        expect(() => logic.authenticateUser(email, 1)).toThrow(TypeError, '1 is not a string')
        expect(() => logic.authenticateUser(email, true)).toThrow(TypeError, 'true is not a string')
        expect(() => logic.authenticateUser(email, [])).toThrow(TypeError, ' is not a string')
        expect(() => logic.authenticateUser(email, {})).toThrow(TypeError, '[object Object] is not a string')
        expect(() => logic.authenticateUser(email, undefined)).toThrow(TypeError, 'undefined is not a string')
        expect(() => logic.authenticateUser(email, null)).toThrow(TypeError, 'null is not a string')

        expect(() => logic.authenticateUser(email, '')).toThrow(ContentError, 'password is empty or blank')
        expect(() => logic.authenticateUser(email, ' \t\r')).toThrow(ContentError, 'password is empty or blank')
    })

    // TODO other cases

    afterAll(() => User.deleteMany().then(database.disconnect))
})
