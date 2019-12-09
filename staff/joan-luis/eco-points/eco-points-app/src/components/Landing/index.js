import React from 'react'
import { Map, Marker, Popup, TileLayer  } from 'react-leaflet'


 export default function(){
        
        
        const position = [41.3887901,2.1589899]
        return <><Map className="mpa" center={position} zoom={1}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />User Marker.</Popup>
        </Marker>
      </Map>
      <h1>Joan probant de pintar un mapa</h1></>

}

