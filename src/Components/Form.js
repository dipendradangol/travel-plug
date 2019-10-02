import React, { Component } from './node_modules/react';
import { HashRouter as Router, Route, NavLink } from './node_modules/react-router-dom';
import SignUpForm from './SignUpForm';
// import SignInForm from './SignInForm';

import './Forms.css';

class Form extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="Form">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                {/* <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink> */}
                <NavLink to="/register" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>
​
              <div className="FormTitle">
                  {/* <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or  */}
                  <NavLink exact to="/register" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
​
              <Route path="/register" component={SignUpForm}>
              </Route>
              {/* <Route path="/login" component={SignInForm}>
              </Route> */}
          </div>
​
        </div>
      </Router>
    );
  }
}

export default Form;