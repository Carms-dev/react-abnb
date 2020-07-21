import React from 'react';

class place extends React.Component {
    render() {
        return (
            <div className="place">
                {this.props.place.name}
            </div>
        )
    };
}

export default place;