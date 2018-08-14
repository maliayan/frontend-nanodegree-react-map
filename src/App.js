import React, { Component } from 'react'
import SearchArea from './SearchArea.js'
import MapArea from './MapArea.js'
import InfoArea from './InfoArea.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchArea />
        <MapArea />
        <InfoArea />
      </div>
    );
  }
}

export default App
