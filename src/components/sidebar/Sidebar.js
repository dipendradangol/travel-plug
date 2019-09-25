import React from 'react';

import './Sidebar.css';

const Sidebar = props => (
    <nav className="side-bar animated fadeInLeft">
        <ul>
            {<input type="text"></input>}
            <li><a href="/">Home</a></li>
            <li><a href="/">Add Station</a></li>
            <li><a href="/">Plugs</a></li>
            <li><a href="/">TravelPlug Store</a></li>
            <li><a href="/">Submit Feedback</a></li>

        </ul>
    </nav>
);

export default Sidebar;