import React from 'react';
import './App.css';
import './animate.css';
import Navbar from './components/Navbar';

class App extends React.Component {
  render(){
    return (
     
        <div className="App">
          <Navbar />
          <main style={{marginTop: '64px'}}>
            <p>This is the page content</p>
          </main>
        </div>
      
    );
  }
}

export default App;
