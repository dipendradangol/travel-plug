import React, { useState } from 'react';
import Api from './Api';
import Distance from './Distance';

import ReactMapGL, {Marker} from 'react-map-gl';
import plugdata from "./plug-location.json";



function Map() {
   const [viewport, setviewport] = useState({
     latitude:60.242263300000005,
     longitude:25.0716969,
     width: '100vw',
     height: '100vh',
     zoom: 10,
   });
  
     
        return (
          <div className="map">
            
            <ReactMapGL  {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle = "mapbox://styles/akeundo/ck0vicxkj0pd41clpjk9abqki"
            onViewportChange={viewport => {
              setviewport(viewport);
            }}
             >
            {plugdata.features.map(plug => (
              <Marker 
              key={plug.ID }
              latitude={plug.AddressInfo.Latitude}
              longitude={plug.AddressInfo.Longitude}
              >
               <div class="marker">plugs</div>
              </Marker>
            ))}
            </ReactMapGL>
            <Distance/>
            <Api/>
            
          </div>
          );
      }
    

 
export default Map;