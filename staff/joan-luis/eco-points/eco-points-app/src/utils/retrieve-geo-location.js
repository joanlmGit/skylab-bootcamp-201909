/**
 * @example retrieveGeoLocation()
 *              .then(({lat, lng}) => console.log(lat, lng))
 *              .catch(console.error)
 */
export default function () {
    return Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position =>
            resolve({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }),
            reject)
    })
}



