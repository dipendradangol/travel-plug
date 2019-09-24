import React from 'react';
import './App.css';
import './animate.css';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Backdrop from './components/sidebar/Backdrop';

class App extends React.Component {
  state = {
    sidebarOpen: false
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
    let backdrop;
    
    if(this.state.sidebarOpen){
      sidebar = <Sidebar />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
        <div style={{height: '100%'}}>
          <Navbar drawerClickHandler={this.ToggleClickHandler} />
          {sidebar}
          {backdrop}
          
          <main style={{marginTop: '64px'}}>
            <p>This is the page content</p>
          </main>
        </div>
      
    );
  }
}

export default App;
