import React from 'react';

import PlaceList from './PlaceList';
import Map from './Map';

import samplePlaces from '../sample-places';

class App extends React.Component {
  state = {
    places: samplePlaces,
    selectedPlace: null
  }

  render() {
    return (
      <div className="app">
        <PlaceList places={this.state.places}/>
        <Map/>
      </div>
    );
  }
}

export default App;
