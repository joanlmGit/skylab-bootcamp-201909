import React from 'react'


export default function() {
    navigator.geolocation.getCurrentPosition((position) => {
        this.setSate({
            location: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        })
    });
}



