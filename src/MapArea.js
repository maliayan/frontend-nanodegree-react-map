import React, { Component } from 'react'
import MapComponent from './MapComponent.js'

class MapArea extends Component {
  state = {markers:
    [
        {
          "id": "preschool",
          "latitude": 40.9760256,
          "longitude": 28.8768765,
          "name": "Gürkan Playschool",
          "type": "Preschool",
          "ll": '40.9760256,28.8768765'
        },
        {
          "id": "elementary-school",
          "latitude": 40.975829,
          "longitude": 28.8747183,
          "name": "Pilot Cengiz Topel Elementary School",
          "type": "Elementary School",
          "ll": '40.975829,28.8747183'
        },
        {
          "id": "high-school",
          "latitude": 41.0099088,
          "longitude": 28.9737057,
          "name": "Cagaloglu High School",
          "type": "High School",
          "ll": '41.0099088,28.9737057'
        },
        {
          "id": "undergraduate-program",
          "latitude": 40.8923449,
          "longitude": 29.3756209,
          "name": "Sabanci University",
          "type": "Undergraduate Program",
          "ll": '40.8923449,29.3756209'
        },
        {
          "id": "graduate-program",
          "latitude": 41.0666846,
          "longitude": 28.9437617,
          "name": "Istanbul Bilgi University",
          "type": "Graduate Program",
          "ll": '41.0666846,28.9437617'
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
