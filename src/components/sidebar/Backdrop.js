import React from 'react';
import './Backdrop.css';

const Backdrop = props => (
    <div className="back-drop" onClick={props.click}/>
);

export default Backdrop;