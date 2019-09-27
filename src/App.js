import React from 'react';
import Distance from './components/Distance';
import Api from './components/Api';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import './App.css';
import './animate.css';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import * as plugData from "./components/plug-location.json";


// import Backdrop from './components/sidebar/Backdrop';

class App extends React.Component {
  state = {
    sidebarOpen: false,
    selectedPlug: null,
    viewport: {
      latitude: 60.242263300000005,
      longitude: 25.0716969,
      width: '100vw',
      height: '100vh',
      zoom: 10,
    },
    userLocation: {}
  };

  ToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sidebarOpen: !prevState.sidebarOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sidebarOpen: false });
  };

  setUserLocation = () => {
  navigator.geolocation.getCurrentPosition(position => {
     let setUserLocation = {
         lat: position.coords.latitude,
         long: position.coords.longitude
      };

      this.setState({
                userLocation: setUserLocation
                    });
                  });
};

  render() {
    let sidebar;
    // let backdrop;

    if (this.state.sidebarOpen) {
      sidebar = <Sidebar />;
      // backdrop = <Backdrop click={this.backdropClickHandler} />;



      

    }
    return (
      <div style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.ToggleClickHandler} />
        {sidebar}
        {/* {backdrop} */}

        <main style={{ marginTop: '64px' }}>
          
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
                  <img src="./electric-car.jpg" alt="plug" />
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
          <Distance />
          <Api />
        </main>
      </div>
            
    );
  }
}

export default App;


/*
<button class="marker">
 <img src="./electric-car.jpg" alt ="plug icon" />
</button>


              {plugData.features.map(plug => (
                 <Marker
                     key={plug.ID}
                     latitude={plug.AddressInfo.Latitude}
                     longitude={plug.AddressInfo.Longitude}
                 >

                   <button class="marker">
                       <img src="./electric-car.jpg" alt ="plug" />
                   </button>

                 </Marker>
               ))}

 key down component below not working yet

useEffect(() => {
        const listener = e => {
          if (e.key === "Escape") {
            this.setState({
              selectedPlug: null
            });
          }
        };
        window.addEventListener("keydown", listener);

        return () => {
          window.removeEventListener("keydown", listener);
        };
      }, []);

*/
