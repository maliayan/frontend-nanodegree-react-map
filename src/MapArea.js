import React, { Component } from 'react'
import MapComponent from './MapComponent.js'

class MapArea extends Component {
  state = {markers:
    [
        {
          "id": "rembetiko",
          "latitude": 40.981402,
          "longitude": 29.023617,
          "name": "Rembetiko Nargile Cafe",
          "category": "Hookah",
          "venueId": '4bd0e95eb221c9b667bdd4d0'
        },
        {
          "id": "aliusta",
          "latitude": 40.981700,
          "longitude": 29.022839,
          "name": "Meşhur Dondurmacı Ali Usta",
          "category": "Icecream",
          "venueId": '4c00177b369476b078d88e1f'
        },
        {
          "id": "kirinti",
          "latitude": 40.981665,
          "longitude": 29.022206,
          "name": "Kırıntı Moda",
          "category": "Fast Food",
          "venueId": '4b9bb122f964a5209f1a36e3'
        },
        {
          "id": "manifesto",
          "latitude": 40.985544,
          "longitude": 29.026222,
          "name": "Coffee Manifesto Moda",
          "category": "Coffee",
          "venueId": '58642f10a36ecd3c73ac6192'
        },
        {
          "id": "pellicano",
          "latitude": 40.983456,
          "longitude": 29.029845,
          "name": "Pizzeria Il Pellicano",
          "category": "Pizza",
          "venueId": '559f995c498ecc935355416e'
        },
        {
          "id": "zapata",
          "latitude": 40.984152,
          "longitude": 29.029171,
          "name": "Zapata Moda",
          "category": "Burger",
          "venueId": '56f59b64498ed9041e759d0b'
        },
        {
          "id": "basta",
          "latitude": 40.987765,
          "longitude": 29.026236,
          "name": "Basta Street Food Bar",
          "category": "Gourmet Street Food",
          "venueId": '570ffbcc498e435e7d4b08ca'
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
