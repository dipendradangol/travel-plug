import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      userLocation: {
        lat2: null,
        lon2: null,
      }
    }

    this.showPosition = this.showPosition.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.getDistance = this.getDistance.bind(this);
  }

  /**
   * update lat and lon value with user location
   * @param {Object} position contains coordinators of user location
   */
  showPosition(position) {
    this.setState({
      userLocation: {
        lat2: position.coords.latitude,
        lon2: position.coords.longitude,
      }
    });
  }

  /**
   * use geolocation browser API to request user location
   */
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  }

  /**
   * Calculate the distance of point 1 (lat1, lon1) and point 2 (lat2, lon2)
   * @param {Number} lat1 
   * @param {Number} lon1 
   * @param {Number} lat2 
   * @param {Number} lon2 
   * @returns {Number} calculated distance in km
   */
  getDistance(lat1, lon1, lat2, lon2) {
    if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0;
    } else {
      let radlat1 = Math.PI * lat1 / 180,
        radlat2 = Math.PI * lat2 / 180,
        theta = lon1 - lon2,
        radtheta = Math.PI * theta / 180,
        dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

      dist = dist > 1 ? 1 : dist;
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344

      return dist.toFixed(2);
    }
  }

  componentDidMount() {
    this.getLocation();

    const url = 'https://api.openchargemap.io/v3/poi/?' +
      'output=json&' +
      'countrycode=FI&' +
      'maxresults=500&' +
      'compact=true&' +
      'verbose=false';

    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result,
        })
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    return (
      !isLoaded ?
        <div>loading....</div> :
        <div>
          {items.map(item => (
            <CardDeck style={{ display: 'inline-block', margin: 'auto auto' }}>
              <div key={item.ID}>
                <Card style={{ width: '23rem', marginTop: '56px' }}>
                  <Card.Img variant="top" src={`${Math.floor(1 + Math.random() * 5)}.jpg`} alt="fortum" height="250px" />
                  <Card.Body>
                    <Card.Title>{item.AddressInfo.Title}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item> Customer ID : {item.ID}</ListGroup.Item>
                    <ListGroup.Item> Address : {item.AddressInfo.AddressLine1}</ListGroup.Item>
                    <ListGroup.Item> City : {item.AddressInfo.Town}</ListGroup.Item>
                    <ListGroup.Item>
                      Distance : <img src="location_icon.svg" alt="location_icon" height="20px"></img>
                      {distance(item.AddressInfo.Latitude, item.AddressInfo.Longitude, lat2, lon2)} km</ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </CardDeck>
          ))};
      </div>
    );
  }
}
export default Api;
