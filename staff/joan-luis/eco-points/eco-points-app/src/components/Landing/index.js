/* eslint-disable */
import React, { useEffect, useState, useContext } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { withRouter } from 'react-router-dom'
import Logic from '../../logic'
import L from 'leaflet'
import positionIcon from '../../images/mark-init-position.png'
import './index.css'





const iconPosUser = L.icon({ iconUrl: positionIcon, iconSize: [30, 30], iconAnchor: [12.5, 41], popupAnchor: [0, -41] })

function MapLanding() {
  const [position, setPosition] = useState([41.265473, 1.974424])
  const [zoom, setZoom] = useState(10)
  const [isUserLocate, setIsUserLocate] = useState(false)
  


  useEffect(() => {
    setZoom(17)

    const interval = setInterval(() => {

      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude;

        (async function (longitude, latitude) {

          setPosition([latitude, longitude])
          setIsUserLocate(true)

        })(longitude, latitude)

      }, error => console.log(error.message))
    }, 3000)
    return () => clearInterval(interval)
    
    
  },[])
  
  
  
  
  return <Map className="map" center={position} zoom={zoom}>
    <TileLayer
      attribution='&amp;copy <a href = "http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {isUserLocate ? <Marker position={position} icon={iconPosUser}><Popup>
      <section className='garbage-popup'>
        <p className='garbage-owner'>Add point Garbage</p>
      </section>
    </Popup></Marker> : ''}

    {pointsGarbage && pointsGarbage.length && pointsGarbage.map(point => <Marker key={point._id} position={[point.coodinates[1], point.coodinates[0]]} icon={iconPosUser}>
      <Popup>
        {point.name && <section className='garbage-popup'>
          <p className='garbage-owner'>{point.name}</p>
        </section>}
      </Popup>
    </Marker>)}

  </Map>
}

export default withRouter(MapLanding)