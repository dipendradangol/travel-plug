import React, { Component } from 'react';



class App extends Component {
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
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.ID}>
                Customer ID : {item.ID} <br/>
                Customer AddressLine1  : {item.AddressInfo.AddressLine1} <br/>
                Customer AddressLine2  : {item.AddressInfo.AddressLine1} <br/>
                Customer Postcode : {item.AddressInfo.Postcode} <br/>
                Customer City  : {item.AddressInfo.Town} <br/>
                Location Latitude : {item.AddressInfo.Latitude} <br/>
                Location Longitude : {item.AddressInfo.Longitude} <br/>
                
                <br/>
               
               </li>
            ))};
          </ul>
        </div>
        );
    }
     
}
}
export default App;
/*
Charging Port : {item.Connections[0].Quantity ? item.Connections[0].Quantity : 'Not found'} <br/>
 Plug Model: {item.Connections[0].ConnectionType ? item.Connections[0].ConnectionType.Title : 'not found'} <br/>
 Plug Status: {item.Connections[0].StatusType ? item.Connections[0].StatusType.Title : 'not found'} <br/>
*/