import React from 'react';

import PlaceList from './PlaceList';
import Map from './Map';

import samplePlaces from '../sample-places';

class App extends React.Component {
  state = {
    places: samplePlaces
  }

  render() {
    return (
      <div className="app">
        <PlaceList className="place_list" places={this.state.places}/>
        <Map className="map" />
      </div>
    );
  }
}

export default App;
