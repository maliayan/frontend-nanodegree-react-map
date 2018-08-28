import React, { Component } from 'react'
import FilteredVenueList from './FilteredVenueList.js'
import './App.css'

class VenueList extends Component {
  // Binding for handling
  constructor(props) {
    super(props)
    this.filterVenues = this.filterVenues.bind(this)
  }

  // Filtering venues list
  filterVenues(event) {
    var updatedMarkers = this.props.markers
    updatedMarkers = updatedMarkers.filter((marker) => {
      return marker.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1
    });
    this.setState({ filteredMarkers: updatedMarkers })
  }

  getInitialState() {
     return {
       filteredMarkers: []
     }
  }

  componentWillMount() {
    this.setState({filteredMarkers: this.props.markers})
  }

  render() {
    return (
      <div className="venueList">
        <h1>My Favorite Venues<br/>in Moda, Kadikoy, Istanbul</h1>
        <input
          type="text"
          placeholder="Type something to filter venues"
          onChange={this.filterVenues}
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            marginTop: `27px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            marginBottom: `24px`
          }}
        />
          {/* Component for filtered results */}
        <FilteredVenueList
          filteredMarkers={this.state.filteredMarkers}
          showInfo={this.props.showInfo}
        />
      </div>
    )
  }
}

export default VenueList
