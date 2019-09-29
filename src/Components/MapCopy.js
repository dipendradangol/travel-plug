import React from 'react';
import Distance from './Distance';
import Api from './Api';
import ReactMapGL from 'react-map-gl';
import * as PlugShare from './plug-location.json';
import '../App.css';

// import Backdrop from './components/sidebar/Backdrop';

class Map extends React.Component {
  state = {
    viewport: {
     latitude:60.242263300000005,
     longitude:25.0716969,
     width: '100vw',
     height: '80vh',
     zoom: 10,
   }
  };

  render(){
    return (
        <div style={{height: '100%'}}>
          <main style={{marginTop: '64px'}}>
            <ReactMapGL  {...this.state.viewport} 
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              mapStyle = "mapbox://styles/akeundo/ck0vicxkj0pd41clpjk9abqki"
              onViewportChange={viewport => {
                this.setState({viewport});
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
              {/* <Api/> */}
          </main>
        </div>
    );
  }
}

export default Map;


/*
<button class="marker">
 <img src="./electric-car.jpg" alt ="plug icon" />
</button> 
*/