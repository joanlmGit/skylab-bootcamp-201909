import call from '../../utils/call'
const {  errors: {  NotFoundError } } = require('eco-points-utils')
const API_URL = process.env.REACT_APP_API_URL

export default function(garbageId){

    return(async ()=> {
        const res= await fetch(`${API_URL}/garbage/one/${garbageId}`, {
            method: 'GET',
            heathers: {'Content-Type': 'application/json'}
        })

        if (res.status !==200) {
            const {error} = await res.json()
            throw new NotFoundError (JSON.parse(res.body).message)
        }
        
            const {garbage}= await res.json()
            return garbage
    })()
}