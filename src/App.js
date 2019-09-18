import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

class App extends React.Component {
  showNavigator(){
    document.getElementById('nav-sidebar')
    .style.display = 'block';
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
            <div>Hello World</div>
        </header>
      </div>
    );
  }
}

export default App;
