
import authenticateUser from './autenticate-user'
import registerUser from './register-user'
import retrieveUser from './retrieve-user'
import createGarbage from './create-garbage'
import listPictures from './list-pictures'
import cleangarbage from './clean-garbage'
import retrieveAllGarbage from './retrieve-garbages'
import retrieveGarbage from './retrieve-one-garbage'


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
    listPictures,
    cleangarbage,
    retrieveAllGarbage,
    retrieveGarbage
}