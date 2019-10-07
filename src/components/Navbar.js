import React from 'react';
import ToggleButton from './sidebar/ToggleButton';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <ToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><Link to="/travel-plug">Travel Plug</Link></div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                    <li><Link to="/travel-plug/stations">Stations</Link></li>
                    <li><Link to="/travel-plug/login">Login</Link></li>
                    <li><Link to="/travel-plug/register">Register</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);


export default Navbar;