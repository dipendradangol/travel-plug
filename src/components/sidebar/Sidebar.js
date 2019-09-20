import React from 'react';

import './Sidebar.css';

const Sidebar = props => (
    <nav className="side-bar">
        <ul>
            <li><a herf="/">Home</a></li>
            <li><a herf="/">Add Station</a></li>
            <li><a herf="/">Plugs</a></li>
            <li><a herf="/">TravelPlug Store</a></li>
            <li><a herf="/">Submit Feedback</a></li>

        </ul>
    </nav>
);

export default Sidebar;