const call = require('../../utils/call')
const { validate, errors: { ConflictError } } = require('eco-points-utils')

const API_URL = process.env.REACT_APP_API_URL

export default function (longitude, latitude, name) {
	//validations
	
	//validate.number(longitude)
	//validate.number(latitude)
	validate.string( name)
    validate.string.notVoid('name', name)
	
	
	


	return (async () => {
		const res = await call(`${API_URL}/garbage`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({longitude, latitude, name})
		})

		if (res.status === 201) return  JSON.parse(res.body)
        
        if (res.status === 409) throw new ConflictError(JSON.parse(res.body).message)

        throw new Error(JSON.parse(res.body).message)

	})
}

//const denver = { type: 'Point', coordinates: [-104.9903, 39.7392] }
//la composicion del schema de location se debe gestionas en api



