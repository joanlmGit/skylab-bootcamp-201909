/**
 * @example retrieveGeoLocation()
 *              .then(({lat, lng}) => console.log(lat, lng))
 *              .catch(console.error)
 */
export default function () {
    
    
    return Promise((resolve, reject) => {
       
        navigator.geolocation.getCurrentPosition(position =>
            resolve({
                lng: position.coords.longitude,
                lat: position.coords.latitude
            }),
  
            reject(Error))
    })
}



