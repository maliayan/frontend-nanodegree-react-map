# Neighborhood Map: React + Google Maps + Foursquare Places API

## About this Project

This is my submission for the capstone project of "Google Front-End Developer Nanodegree Program". This project includes an web app which shows some of my favorite venues in Kadikoy, Istanbul.

* I created this project with [Create React App](https://github.com/facebookincubator/create-react-app).
* Then I used [React Google Maps](https://github.com/tomchentw/react-google-maps) to integrate Google Maps to my project.
* Lastly, I added one sample photo for each venue which is provided by [Foursquare Places API](https://developer.foursquare.com/places-api) and is implemented with [React Foursquare](https://github.com/foursquare/react-foursquare).

## Instructions

To install and launch the project:

* Clone the repository with `git clone https://github.com/maliayan/frontend-nanodegree-react-map.git`
* Install all project dependencies with `npm install`
* Start the development server with `npm start`
* Run a production build with `npm run build`
  * PS: By default, [Create React App](https://github.com/facebookincubator/create-react-app) includes service worker in the production build.

## Built with
* [React](https://github.com/facebook/react)
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
* [React Google Maps](https://github.com/tomchentw/react-google-maps)
* [Foursquare Places API](https://developer.foursquare.com/places-api)
* [React Foursquare](https://github.com/foursquare/react-foursquare)
* [recompose](https://github.com/acdlite/recompose)
* [npm](https://github.com/npm/cli)

## React Tree
```
<App />
--- <MapArea />
------ <MapComponent />
--------- <VenueList />
------------ <FilteredVenueList />
--------- <GoogleMap />
------------ <Marker />
--------------- <InfoWindow />
------------------ <FoursquareInfo />
```

## Bon Appetit!
