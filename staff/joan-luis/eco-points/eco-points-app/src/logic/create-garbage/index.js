const call = require('../../utils/call')
const { validate, errors: { ConflictError } } = require('eco-points-utils')
// const { env: { REACT_APP_API_URL: API_URL } } = process
const API_URL = process.env.REACT_APP_API_URL













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
  