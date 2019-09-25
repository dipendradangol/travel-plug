import React from 'react';
import Distance from './components/Distance';
import Api from './components/Api';
import ReactMapGL from 'react-map-gl';
import * as PlugShare from './components/plug-location.json';
import './App.css';
import './animate.css';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar/Sidebar';
// import Backdrop from './components/sidebar/Backdrop';

class App extends React.Component {
  state = {
    sidebarOpen: false,
    viewport: {
     latitude:60.242263300000005,
     longitude:25.0716969,
     width: '100vw',
     height: '80vh',
     zoom: 10,
   }
  };

  ToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidebarOpen: !prevState.sidebarOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sidebarOpen: false});
  };

  render(){
    let sidebar;
    // let backdrop;
    
    if(this.state.sidebarOpen){
      sidebar = <Sidebar />;
      // backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
        <div style={{height: '100%'}}>
          <Navbar drawerClickHandler={this.ToggleClickHandler} />
          {sidebar}
          {/* {backdrop} */}
          
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
              <Api/>
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
*/