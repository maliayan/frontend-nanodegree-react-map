import React, { Component } from 'react'
import FilteredVenueList from './FilteredVenueList.js'
import './App.css'

class VenueList extends Component {

  render() {
    return (
      <div className="venueList">
        <h1>My Favorite Venues<br/>in Kadikoy, Istanbul</h1>
        <input
          tabIndex={1}
          role="search"
          aria-labelledby="filter"
          className="searchBox"
          type="text"
          placeholder="Type something to filter venues"
          onChange={this.props.filterVenues}
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
          filteredMarkers={this.props.filteredMarkers}
          showInfo={this.props.showInfo}
          markerAnimation={this.props.markerAnimation}
        />
      </div>
    )
  }
}

export default VenueList
