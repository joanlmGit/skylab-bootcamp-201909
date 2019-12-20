
import authenticateUser from './autenticate-user'
import registerUser from './register-user'
import retrieveUser from './retrieve-user'
import createGarbage from './create-garbage'
import listImages from './list-pictures'
import modifyPoint from './clean-garbage'



export default {
    set __credentials__({ id, token }) {
        sessionStorage.id = id
        sessionStorage.token = token
    },
    get __credentials__() {
        const { id, token } = sessionStorage

        return { id, token }
    },
    registerUser,
    authenticateUser,
    retrieveUser,
    createGarbage,
    listImages,
    modifyPoint
}