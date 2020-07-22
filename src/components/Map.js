import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { key } from '../key';

class Map extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };


    render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: "100vh", width: "40%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: key }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <Marker
                lat={59.955413}
                lng={30.337844}
                // text="My Marker"
              />
            </GoogleMapReact>
          </div>
        );
    }
}


export default Map;

