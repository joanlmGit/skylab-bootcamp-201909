/* eslint-disable */
import React, { useEffect, useState, useContext } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { withRouter } from 'react-router-dom'
import Context from '../../components/Context'
import L from 'leaflet'
import retrieveGarbages from '../../logic/retrieve-garbages'
import positionIcon from '../../images/mark-init-position.png'
import './index.css'



const iconPos = L.icon({ iconUrl: positionIcon, iconSize: [30, 30], iconAnchor: [12.5, 41], popupAnchor: [0, -41] })

function MapLanding({ history }) {
  const [position, setPosition] = useState([41.265473, 1.974424])
  const [zoom, setZoom] = useState(17)





  useEffect(() => {
    setZoom(17)

    const interval = setInterval(() => {

      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude;

        (async function (longitude, latitude) {

          setPosition([latitude, longitude])


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
    
    {(allGarbages) => {
      allGarbages.forEach((point => {

        <Marker position={point.coordinates} icon={iconPos}>
          <Popup>
            <section className='garbage-popup'>
              <p className='garbage-owner'>added point in Map</p>
            </section>
          </Popup>
        </Marker>
      }))

    }
    }

  </Map>
}
export default withRouter(MapLanding)