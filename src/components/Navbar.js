import React from 'react';
import './Navbar.css';

const Navbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                
            </div>
            <div className="toolbar_logo"><a herf="/">The Logo</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a herf="/">Home</a></li>
                    <li><a herf="/">Add Station</a></li>
                    <li><a herf="/">Plugs</a></li>
                    <li><a herf="/">TravelPlug Store</a></li>
                    <li><a herf="/">Submit Feedback</a></li>
                </ul>
            </div>
        </nav>
    </header>
);


export default Navbar;