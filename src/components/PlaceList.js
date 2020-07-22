import React from 'react';

import Place from './Place';

class PlaceList extends React.Component {
    render() {
        const { places } = this.props;
        return (
            <div className="place-list">
                {places.map((place, index) => <Place 
                    selectPlace={this.props.selectPlace}
                    selectedPlace={this.props.selectedPlace}
                    place={place} 
                    index={index}
                    key={place.imageUrl} />)}
            </div>
        )
    };
}

export default PlaceList;