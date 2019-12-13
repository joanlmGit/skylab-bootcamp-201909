import React from 'react'
import { Map, Marker, Popup, TileLayer  } from 'react-leaflet'
import './index.css'

export default function(){
        
        
        const position = [41.3898910,2.1589899]
        return <><Map className="map" center={position} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />User Marker.</Popup>
        </Marker>
      </Map>
     </>

}

