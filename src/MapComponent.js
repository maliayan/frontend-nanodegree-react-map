import React from 'react'
import { compose, withProps, withStateHandlers } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import FoursquareInfo from './FoursquareInfo.js'

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA90aYQQIlffh6rcT1ELmUCtMaqBQqnz1I&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
      isOpen: false,
      infoId: null
    }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
      showInfo: ({ isOpen, infoId }) => (id) => ({
        isOpen: infoId !== id || !isOpen,
        infoId: id
      }),
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 40.984569, lng: 29.024500 }}
  >
    {props.isMarkerShown && props.markers.map(marker => (
      <Marker
        key={marker.id}
        position={{ lat: marker.latitude, lng: marker.longitude }}
        onClick={()=>{ props.showInfo(marker.id)} }
      >
        {props.isOpen && props.infoId === marker.id  &&  <InfoWindow onCloseClick={props.showInfo}>
          <div>
            <h3>{marker.name}</h3>
            <h5>{marker.category}</h5>
            <FoursquareInfo
              venueId={marker.venueId}
            />
          </div>
        </InfoWindow>}
      </Marker>
    ))}
  </GoogleMap>
)

export default MapComponent
