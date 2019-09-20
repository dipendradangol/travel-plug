import React from 'react';
import './ToggleButton.css';

const ToggleButton = props => (
    <button className="toggle-button">
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
    </button>
);

export default ToggleButton;