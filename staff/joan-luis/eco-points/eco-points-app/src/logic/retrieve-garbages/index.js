const call = require('../../utils/call')
const {validate, errors:{NotFoundError}} = require ('eco-points-utils')
const API_URL = process.env.REACT_APP_API_URL

/**
 * Call all points garbages
 */
module.exports = function() {
    debugger
    return (async ()=> {
        const res = await call (`${API_URL}/garbage`, {
            method: 'GET',
            headers: {'constent-type': 'application/json'},
        })

        if (res.status === 200) return  JSON.parse(res.body)
        
        if (res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)

        throw new Error(JSON.parse(res.body).message)
        
    })()
}