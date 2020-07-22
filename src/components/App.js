import React from 'react';
import PlaceList from './PlaceList';
import Map from './Map';
import samplePlaces from '../sample-places';

class App extends React.Component {
  state = {
    places: samplePlaces,
    selectedPlace: samplePlaces[0]
  }

  selectPlace = (key) => {
    const selectedPlace = this.state.places[key];
    this.setState({ selectedPlace });
  }

  render() {
    return (
      <div className="app">
        <PlaceList 
          selectPlace={this.selectPlace}
          places={this.state.places} 
          selectedPlace={this.state.selectedPlace}
        />
        <Map selectedPlace={this.state.selectedPlace} />
      </div>
    );
  }
}

export default App;
