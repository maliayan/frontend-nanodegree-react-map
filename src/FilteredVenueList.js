import React, { Component } from 'react'

class FilteredVenueList extends Component {

  render() {
    return (
      <ul>
      {
        this.props.filteredMarkers.map(marker => {
          return <li key={marker.id} onClick={() => {this.props.showInfo.bind(this)(marker.id)}}>{marker.name}</li>
        })
      }
      </ul>
    )
  }
}

export default FilteredVenueList