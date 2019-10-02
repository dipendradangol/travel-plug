import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import './Sidebar.css';

const Sidebar = props => (
    <nav className="side-bar animated fadeInLeft">
        <ul>
            {/* {<input type="text"></input>} */}
            <li><Link to="/">Plugs</Link></li>
            <li><Link to="/">Add Station</Link></li>
            <li><Link to="/">TravelPlug Store</Link></li>
            <li><Link to="/">Submit Feedback</Link></li>

        </ul>
    </nav>
);

export default Sidebar;