import React from 'react';
import './animate.css';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Map from './components/Map';
import Api from './components/Api';
import Form from './components/Form';
import SignInForm from './components/SignInForm';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// import Backdrop from './components/sidebar/Backdrop';

class App extends React.Component {
  state = {
    sidebarOpen: false,  
  };

  ToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sidebarOpen: !prevState.sidebarOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sidebarOpen: false });
  };

  render() {
    let sidebar;
    // let backdrop;

    if (this.state.sidebarOpen) {
      sidebar = <Sidebar />;
      // backdrop = <Backdrop click={this.backdropClickHandler} />;

    }
    return (
      <Router>
        <div style={{height: '100%'}}>
          <Navbar drawerClickHandler={this.ToggleClickHandler} />
          {sidebar}
          <Switch>
             <Route path="/cards" exact component={Api}/> 
             <Route path="/login" exact component={SignInForm}/> 
             <Route exact path="/register" component={Form}/> 
             {/* <Route path="/" component={} /> */}
             {/* {backdrop} */}
             <Map />

          </Switch>
        </div>
      </Router> 

            
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
