


import React, { useEffect, useState, useContext} from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { withRouter } from'react-router-dom'
import Context from '../../components/Context'
import L from 'leaflet'
import positionIcon from '../../images/mark-init-position.png'
import './index.css'






var iconPos = L.icon({ iconUrl: positionIcon, iconSize: [30, 30], iconAnchor: [12.5, 41], popupAnchor: [0, -41] })

function MapLanding({ history }) {
  const [position, setPosition] = useState([0, 0])
  const [zoom, setZoom] = useState(17)
  const [haveUsersLocation, setHaveUsersLocation] = useState(false)
  
  
  

  useEffect(() => {
    setZoom(17)

    const interval = setInterval(() => {
      
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude;
        
        (async function (longitude, latitude){
          //await logic.updateDinamicLocation(Number(longitude), Number(latitude))

          
          //const {static: users} = await logic.retrieveAllUsers(4000)
          
          setPosition([latitude, longitude])
          //setNameUser(user)
          
          setHaveUsersLocation(true)
        })(longitude, latitude)

      }, error => console.log(error.message))
    }, 3000)
    return () => clearInterval(interval)
  })

 
  
  

  return <Map className="map" center={position} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { haveUsersLocation ? <Marker position={position} icon={iconPos}></Marker> : '' }
    
      
    </Map>
}
export default withRouter(MapLanding)