import React from 'react';
import './App.css';
import './animate.css';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar/Sidebar';

class App extends React.Component {
  render(){
    return (
     
        <div className="App">
          <Navbar />
          <Sidebar />
          <main style={{marginTop: '64px'}}>
            <p>This is the page content</p>
          </main>
        </div>
      
    );
  }
}

export default App;
