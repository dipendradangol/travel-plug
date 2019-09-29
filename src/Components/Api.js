import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
// import lidl from './images/lidl.jpg';

let lat2, lon2 ;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert("Allow location on");
  }
}

function showPosition(position) {
  lat2 = position.coords.latitude
  lon2 = position.coords.longitude;
}

getLocation();

function distance(lat1, lon1, lat2, lon2) {
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



class Api extends Component {
  constructor(props){
      super(props);
      this.state = {
          items: [],
          isLoaded: false,
  }
}

  componentDidMount() {
   const url= 'https://api.openchargemap.io/v3/poi/?output=json&countrycode=FI&maxresults=500&compact=true&verbose=false'
      fetch(url)
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              items: json,
            })
          });
  }

  render() {
    var {isLoaded, items} = this.state;
    if (!isLoaded) {
      return <div>loading....</div>
    } else {
      return (
        <div>
          {/* <Card style={{ width: '18rem', marginTop: '56px', display: 'inline-flex' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>  
              </Card> */}
          
            {items.map(item => (
              <CardDeck style={{display:'inline-block', margin:'auto auto'}}>
                <div key={item.ID}>
                  <Card style={{ width: '23rem', marginTop: '56px' }}>
                  <Card.Img variant="top" src={`${Math.floor(1 + Math.random()*5)}.jpg`} alt="fortum" height="250px" />
                    <Card.Body>
                      <Card.Title>Nearest Station</Card.Title>
                      <Card.Text>
                        {/* Customer AddressLine2  : {item.AddressInfo.AddressLine1} <br/> */}
                        {/* Customer Postcode : {item.AddressInfo.Postcode} <br/>
                        Customer City  : {item.AddressInfo.Town} <br/>
                        Location Latitude : {item.AddressInfo.Latitude} <br/>
                        Location Longitude : {item.AddressInfo.Longitude} <br/> */}
                      </Card.Text>
                    </Card.Body>  
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item> Customer ID : {item.ID}</ListGroup.Item>
                        <ListGroup.Item>Address : {item.AddressInfo.AddressLine1}</ListGroup.Item>
                        {/* <ListGroup.Item>Postcode : {item.AddressInfo.Postcode}</ListGroup.Item> */}
                        <ListGroup.Item>City : {item.AddressInfo.Town}</ListGroup.Item>
                        {/* <ListGroup.Item>Location Latitude : {item.AddressInfo.Latitude} </ListGroup.Item>
                        <ListGroup.Item>Location Longitude : {item.AddressInfo.Longitude}</ListGroup.Item> */}
                        <ListGroup.Item>Distance : 
                           <img src="location_icon.svg" alt="location_icon" height="20px"></img> 
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
}
export default Api;
/*
Charging Port : {item.Connections[0].Quantity ? item.Connections[0].Quantity : 'Not found'} <br/>
 Plug Model: {item.Connections[0].ConnectionType ? item.Connections[0].ConnectionType.Title : 'not found'} <br/>
 Plug Status: {item.Connections[0].StatusType ? item.Connections[0].StatusType.Title : 'not found'} <br/>
*/