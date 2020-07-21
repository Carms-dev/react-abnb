import React from 'react';

import Place from './Place';

class PlaceList extends React.Component {
    render() {

        const { places } = this.props;
        return (
            <div>
                {places.map((place) => <Place place={place} key={place.imageUrl} />)}
            </div>
        )
    };
}

export default PlaceList;