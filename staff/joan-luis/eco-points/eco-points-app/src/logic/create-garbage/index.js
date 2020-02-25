const call = require('../../utils/call')
const { validate, errors: { ConflictError } } = require('eco-points-utils')
//const API_URL = process.env.REACT_APP_TEST_DB_URL
const API_URL = process.env.REACT_APP_API_URL

/**
 * allows user access once registered
 * @param{float}latitude coordenate
 * @param{float}longitude coordenate
 * @param{string}name user that create a garbage point
 * @param{boolean}status mean that this area or point had been cleaned
 */
export default function (longitude, latitude, name, status) {
	//validations
	
	//validate.number(longitude)
	//validate.number(latitude)
	validate.string( name)
    validate.string.notVoid('name', name)
	
	let location={ type: 'Point', coordinates: [latitude, longitude] }
	
	return (async () => {
		const res = await call(`${API_URL}/garbage`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({location, name, status})
		})
		
		if (res.status === 201) return  JSON.parse(res.body)
        
        if (res.status === 409) throw new ConflictError(JSON.parse(res.body).message)

        throw new Error(JSON.parse(res.body).message)

	})()
} 




