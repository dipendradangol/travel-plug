import React, { Component } from 'react';


export default class Distance extends Component {
    constructor(){
        super();
        this.state = {
            ready: false,
            where: {lat:null, lng:null},
            error: null
        }
    }
    componentDidMount(){
        let geoOptions = {
            enableHighAccuracy: true,
            timeOut: 20000,
            maximumAge: 60 * 60 * 24
        };
        this.setState({ready:false, error: null });
        navigator.geolocation.getCurrentPosition( this.geoSuccess, 
                                                this.geoFailure,
                                                geoOptions);
    }
    geoSuccess = (position) => {
        
        
        this.setState({
            ready:true,
            where: {lat: position.coords.latitude,lng:position.coords.longitude }
        })
    }
    geoFailure = (err) => {
        this.setState({error: err.message});
    }
    render() {
        return (
            <div>
                { !this.state.ready && (
                <div>Using Geolocation in React Native.</div>
                )}
                { this.state.error && (
                <div>{this.state.error}</div>
                )}
                { this.state.ready && (
                    <div>{
                    `Latitude: ${this.state.where.lat} ||
                    Longitude: ${this.state.where.lng}`
                    }</div>
                )}
            </div>
        );
    }
}

