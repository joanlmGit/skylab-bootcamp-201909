const call = require('../../utils/call')
const { validate, errors: { ConflictError } } = require('eco-points-utils')
const retrieveGeoLocation =require('../../utils/retrieve-geo-location')
const API_URL = process.env.REACT_APP_API_URL

module.exports=function (name, fileImage, lng, lat){
	//validations
	retrieveGeoLocation(lng,lat)
              .then(({lng, lat}) => (lng, lat))
              .catch(console.error)	

	return (async () => {
		const res= await call (`${API_URL}/garbage`, {
			method: 'POST',
			headers: {'content-type':'application/json'},
			body: JSON.stringify({name, fileImage, })
		})
	})
}

//const denver = { type: 'Point', coordinates: [-104.9903, 39.7392] }



/* export function getLocation() {
	return new Promise((resolve) => {
	  navigator.geolocation.getCurrentPosition((position) => {
		resolve({
		  lat: position.coords.latitude,
		  lng: position.coords.longitude
		});
	  }, () => {      
		resolve(fetch('https://ipapi.co/json')
		  .then(res => res.json())
		  .then(location => {
			return {
			  lat: location.latitude,
			  lng: location.longitude
			};
		  }));
	  });
	});
  } */
  