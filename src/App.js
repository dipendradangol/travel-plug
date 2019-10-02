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
             <Route path="/stations" exact component={Api}/> 
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

