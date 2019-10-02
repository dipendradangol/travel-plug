import React from './node_modules/react';
import Distance from './Distance';

import * as plugData from "./plug-location.json.js.js";
import ReactMapGL, { Marker, Popup } from './node_modules/react-map-gl';



class Map extends React.Component {
  state = {
    selectedPlug: null,
    viewport: {
      latitude: 60.198912,
      longitude: 24.942182,
      width: '100vw',
      height: '100vh',
      zoom: 10,
    }
  }

    setUserLocation = () => {
      navigator.geolocation.getCurrentPosition(position => {
         let setUserLocation = {
             lat: position.coords.latitude,
             long: position.coords.longitude
          };
    
          this.setState({
            setUserLocation: setUserLocation
                        });
                      });
    };
    
  
    render() {
        return (
          <div className="map">
            
            <main>
                
                <ReactMapGL  {...this.state.viewport}
                  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                  mapStyle="mapbox://styles/akeundo/ck0vicxkj0pd41clpjk9abqki"
                  onViewportChange={viewport => {
                    this.setState({ viewport });
                  }}
                >
                  {plugData.features.map(plug => (
                    <Marker
                      key={plug.ID}
                      latitude={plug.AddressInfo.Latitude}
                      longitude={plug.AddressInfo.Longitude}
                    >
                    
                      <button class="marker"
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            selectedPlug: plug
                          });
                        }}
                      >
                        <img src="./electric-car.png" alt="plug" />
                      </button>

                    </Marker>
                  ))}

                  {this.state.selectedPlug ? (
                    <Popup
                      latitude={this.state.selectedPlug.AddressInfo.Latitude}
                      longitude={this.state.selectedPlug.AddressInfo.Longitude}
                      onClose={() => {
                        this.setState({
                          selectedPlug: null
                        });
                      }}
                    >
                      <div>
                        <h2>{this.state.selectedPlug.AddressInfo.Title}</h2>
                        <h2>{this.state.selectedPlug.AddressInfo.AddressLine1}</h2>
                        <h2>{this.state.selectedPlug.AddressInfo.AddressLine2}</h2>
                        <h2>{this.state.selectedPlug.AddressInfo.Postcode}</h2>
                        <h2>{this.state.selectedPlug.AddressInfo.Town}</h2>

                      </div>
                    </Popup>
                  ) : null}

                
                </ReactMapGL>
                <Distance/>
            </main>
            
          </div>
          );
      }
}
 
export default Map;