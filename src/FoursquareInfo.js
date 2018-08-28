import React, { Component } from 'react'
import ReactDOM from 'react-dom'

var foursquare = require('react-foursquare')({
  clientID: 'WNMXE4FYGUJSW3XUUMHFF2TLPAAD2NL13KSIZXXU10V0WWCA',
  clientSecret: 'SZBZHYOQKUGR5A4PJZIFU1SDMC1N13AOIAUB5V4RQQWPMEDQ'
});

export default class FoursquareInfo extends Component {

  constructor(props) {
       super(props);
       this.state = {
         photos: []
       };
     }

    componentDidMount() {
      // Required VENUE_ID to fetch data
      var params = {
        "venue_id": '4ba63359f964a5200b3b39e3'
      };
      foursquare.venues.getVenuePhotos(params)
        .then(res=> {
          this.setState({ photos: res.response.photos.items });
        });
    }

  render() {
    return (
    <div>
        { this.state.photos.map(photo => {
          return <div key={photo.id}><img src={ photo.prefix + "100x100" + photo.suffix } alt={ "Photo of " + this.props.name } /><p>The photo is provided by Foursquare</p></div>
        }) }
    </div>
  )
  }
}

ReactDOM.render(
  <FoursquareInfo />,
  document.getElementById('root')
);
