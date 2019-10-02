import React from './node_modules/react';
import ToggleButton from './sidebar/ToggleButton';
import './Navbar.css';
import { Link } from './node_modules/react-router-dom';

const Navbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <ToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><Link to="/">Travel Plug</Link></div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                    <li><Link to="/stations">Stations</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);


export default Navbar;