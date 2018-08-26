import React, { Component } from 'react'
import ReactDOM from 'react-dom'

var foursquare = require('react-foursquare')({
  clientID: 'NS11U2SEJ5E4UUP0XHK4UCOSCMSTGO4QRSOU0RJTVFFJ4T2J',
  clientSecret: '15VGOO0NWSOQGR1W45YG3SI4JZHMQBG2PFVSZ3XX2ALRCX2N'
});

export default class FoursquareInfo extends Component {

  constructor(props) {
       super(props);
       this.state = {
         items: []
       };
     }

    componentDidMount() {
      var params = {
        "query": 'cafe',
        "ll": this.props.ll,
        "v": '20180826'
      };
      foursquare.venues.getVenues(params)
        .then(res=> {
          this.setState({ items: res.response.venues });
        });
    }

  render() {
    return (
    <div>
        <div>Items:</div>
        { this.state.items.map(item=> { return <div key={item.id}>{item.name}</div>}) }
    </div>
  )
  }
}

ReactDOM.render(
  <FoursquareInfo />,
  document.getElementById('root')
);
