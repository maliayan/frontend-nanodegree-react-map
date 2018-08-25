import React, { Component } from 'react'
import MapComponent from './MapComponent.js'

class MapArea extends Component {
  state = {markers:
    [
        {
          "id": "preschool",
          "longitude": 28.8768765,
          "latitude": 40.9760256,
          "name": "Gürkan Playschool",
          "type": "Preschool"
        },
        {
          "id": "elementary-school",
          "longitude": 28.8747183,
          "latitude": 40.975829,
          "name": "Pilot Cengiz Topel Elementary School",
          "type": "Elementary School"
        },
        {
          "id": "high-school",
          "longitude": 28.9737057,
          "latitude": 41.0099088,
          "name": "Cagaloglu High School",
          "type": "High School"
        },
        {
          "id": "undergraduate-program",
          "longitude": 29.3756209,
          "latitude": 40.8923449,
          "name": "Sabanci University",
          "type": "Undergraduate Program"
        },
        {
          "id": "graduate-program",
          "longitude": 28.9437617,
          "latitude": 41.0666846,
          "name": "Istanbul Bilgi University",
          "type": "Graduate Program"
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
