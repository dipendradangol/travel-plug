import React from 'react';
import ToggleButton from './sidebar/ToggleButton';
import './Navbar.css';

const Navbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <ToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/">Travel Plug</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">login</a></li>
                    <li><a href="/">Register</a></li>
                </ul>
            </div>
        </nav>
    </header>
);


export default Navbar;