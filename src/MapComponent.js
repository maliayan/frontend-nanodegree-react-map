import React from 'react'
import { compose, withProps, withStateHandlers } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import ErrorBoundary from './ErrorBoundary.js'
import VenueList from './VenueList.js'
import FoursquareInfo from './FoursquareInfo.js'

// Used recompose to simplify the code
const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA90aYQQIlffh6rcT1ELmUCtMaqBQqnz1I&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
      isOpen: false,
      infoId: null,
    }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
      showInfo: ({ isOpen, infoId }) => (id) => ({
        isOpen: infoId !== id || !isOpen,
        infoId: id
      })
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <div>
    <ErrorBoundary errorMessage="Something went wrong! Sorry!">
      <VenueList
        markers={props.markers}
        showInfo={props.showInfo}
      />
      {/* Implementation of Google Maps */}
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 40.984569, lng: 29.024500 }}
      >
        {/* Mapping the markers according to their information */}
        {props.isMarkerShown && props.markers.map(marker => (
          <Marker
            key={marker.id}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            onClick={ ()=>{ props.showInfo(marker.id) } } // Opening InfoWindow with clicking
          >
            {props.isOpen && props.infoId === marker.id  &&  <InfoWindow onCloseClick={props.showInfo}>
              <div>
                {/* Opening InfoWindow with clicking */}
                <h3>{marker.name}</h3>
                <h5>{marker.category}</h5>
                {/* Component for the photo provided by Foursquare */}
                <FoursquareInfo
                	venueId={marker.venueId}
                	name={marker.name}
                />
              </div>
            </InfoWindow>}
          </Marker>
        ))}
      </GoogleMap>
    </ErrorBoundary>
  </div>
)

export default MapComponent
