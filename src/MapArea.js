import React, { Component } from 'react'
import MapComponent from './MapComponent.js'

class MapArea extends Component {
  state = {markers:
    [
        {
          "id": 1,
          "longitude": 28.980153,
          "latitude": 41.008458
        },
        {
          "id": 2,
          "longitude": 28.980154,
          "latitude": 41.008459
        },
        {
          "id": 3,
          "longitude": 30.980153,
          "latitude": 40.008458
        },
        {
          "id": 4,
          "longitude": 29.980153,
          "latitude": 40.008458
        },
        {
          "id": 5,
          "longitude": 28.980153,
          "latitude": 38.008458
        }
      ]
    }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MapComponent
        markers={this.state.markers}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MapArea
