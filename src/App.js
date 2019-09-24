import React, { useState } from 'react';
import Distance from './Components/Distance';
import Api from './Components/Api';
import ReactMapGL, {Marker} from 'react-map-gl';
import * as PlugShare from "./Components/plug-location.json";



function App() {
   const [viewport, setviewport] = useState({
     latitude:60.242263300000005,
     longitude:25.0716969,
     width: '100vw',
     height: '80vh',
     zoom: 10,
   });

    
     
        return (
          <div className="App">
            
            <ReactMapGL  {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle = "mapbox://styles/akeundo/ck0vicxkj0pd41clpjk9abqki"
            onViewportChange={viewport => {
              setviewport(viewport);
            }}
             >
            {PlugShare.features.map(plug => (
              <marker 
              key={plug.ID }
              latitude={plug.AddressInfo.Latitude}
              longitude={plug.AddressInfo.Longitude}
              >
               <div class="marker">plugs</div>
              </marker>
            ))}
            </ReactMapGL>
            <Distance/>
            <Api/>
            
          </div>
          );
      }
       



 
export default App;


/*
<button class="marker">
 <img src="./electric-car.jpg" alt ="plug icon" />
</button> 
*/