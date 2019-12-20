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

            reject(Error))
    })
}
/* function getGeolocation() {

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
    };

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
    
    //return (success.pos.latitude, success.pos.longitude)
}

export default getGeolocation () */