import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render(){
        return(
            <div id="nav-sidebar" className="nav-content animated fadeInLeft">
                <Link to='/'>
                    <div>Home</div>
                </Link>
                <Link to='/add station'>
                    <div>Add Station</div>
                </Link>
                <Link to='/plugs'>
                    <div>Plugs</div>
                </Link>
                <Link to='/travel store'>
                    <div>TravelPlug Store</div>
                </Link>
                <Link to='/feedback'>
                    <div>Submit Feedback</div>
                </Link>

            </div>
        )

    }
}

export default Navbar;