/* eslint-disable */
import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import L from 'leaflet'
import retrieveGarbages from '../../logic/retrieve-garbages'
import positionIcon from '../../images/mark-init-position.png'
//import './index.css'


function addPointsToMap() {

    useEffect(() => {


        const allGarbages = (async () => {
            return await retrieveGarbages()
        })()

        const iconPos = L.icon({ iconUrl: positionIcon, iconSize: [30, 30], iconAnchor: [12.5, 41], popupAnchor: [0, -41] })


        let map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        let arrayMarkers = allGarbages.map(() => {
            var newMarker = new L.marker([point.coordinates], { icon: iconPos }).bindPopup(point.name).openPopup()
            L.marker.addTo(newMarker)
        })

        arrayMarkers.addTo(map)
    })

    return <Map className="map" center={position} zoom={zoom}></Map>
}



export default withRouter(addPointsToMap)

