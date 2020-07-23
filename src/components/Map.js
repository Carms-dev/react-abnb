import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


class Map extends React.Component {
  //   static defaultProps = {
  //     center: {
  //       lat: 59.95,
  //       lng: 30.33,
  //     },
  //     zoom: 11,
  //   };
  center() {
    return {
      lat: this.props.selectedPlace.lat,
      lng: this.props.selectedPlace.lng,
    };
  }

  render() {
    const GOOGLEMAP_API_KEY = process.env.REACT_APP_GOOGLEMAP_API_KEY;
    // const center = {
    //   lat: this.props.selectedPlace.lat,
    //   lng: this.props.selectedPlace.lng,
    // };

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "40%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLEMAP_API_KEY }}
          defaultCenter={this.center()}
          defaultZoom={11}
        >
          <Marker
            lat={this.center().lat}
            lng={this.center().lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}


export default Map;

