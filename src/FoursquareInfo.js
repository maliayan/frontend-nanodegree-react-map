import React, { Component } from 'react'

var foursquare = require('react-foursquare')({
  clientID: 'W4KFK1JSYT1X0FKSDXYQ5OKWRDVXCCHJ3XLDIMKK1SRT4MSZ',
  clientSecret: 'V4NEHDPTTQRG1AKPYQXYAE0PINNRKMPKWCBZACSFAD4QZP2J'
});

class FoursquareInfo extends Component {
  constructor(props) {
       super(props);
       this.state = {
         photos: []
      };
     }

   componentWillMount() {
     // Required VENUE_ID to fetch data
     var params = {
       "venue_id": this.props.venueId
     };
     foursquare.venues.getVenuePhotos(params)
       .then(res=> {
         this.setState({ photos: res.response.photos.items });
       })
       .catch(error => {
        alert(
          "The photo cannot be loaded, sorry! Please check the clientID, clientSecret and request quota of Foursquare API."
        );
      });
   }

  render() {
    return (
    <div>
      { this.state.photos.slice(0,1).map(photo => {
        return <div key={photo.id}><img src={ photo.prefix + "300x300" + photo.suffix } alt={ "Photo of " + this.props.name } /><p>The photo is provided by Foursquare</p></div>
      }) }
    </div>
  )
  }
}
FoursquareInfo.defaultProps = {
venueId: ''
}

export default FoursquareInfo
