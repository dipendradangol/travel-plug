import React from 'react';
// import './App.css';
import './animate.css';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar/Sidebar';
// import Map from './components/Map';
import Card from './components/card/Card';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Backdrop from './components/sidebar/Backdrop';

class App extends React.Component {
  state = {
    sidebarOpen: false,
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
      <Router>
        <div style={{height: '100%'}}>
          <Navbar drawerClickHandler={this.ToggleClickHandler} />
          {sidebar}
          <Switch>
             <Route path="/cards" exact component={Card}/> 
             {/* <Route path="/login" component={Login}/>  */}
             {/* <Route path="/register" component={Register}/>  */}
             {/* <Route path="/sabina" component={sabina} /> */}
             {/* {backdrop} */}
             {/* <Map /> */}
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
*/