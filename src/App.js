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

class App extends React.Component {
  state = {
    sidebarOpen: false,
  };

  /**
   * update the state with the inverted value of sidebarOpen
   * @param
   * @return {Void}
   */
  toggleClickHandler = () => {
    this.setState((prevState) => {
      return { sidebarOpen: !prevState.sidebarOpen };
    });
  };

  render() {
    return (
      <Router>
        <div style={{ height: '100%' }}>
          <Navbar drawerClickHandler={this.toggleClickHandler} />
          {this.state.sidebarOpen ? <Sidebar /> : null}
          <Switch>
            <Route path="/travel-plug/stations" exact component={Api} />
            <Route path="/travel-plug/login" exact component={SignInForm} />
            <Route exact path="/travel-plug/register" component={Form} />
            <Route exact path="/travel-plug/" component={Map} />
            {/* <Route path="/" component={} /> */}
            {/* {backdrop} */}
            {/* <Map /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

