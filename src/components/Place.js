import React from 'react';

class place extends React.Component {
    handleClick = (e) => {
        const index = this.props.index;
        this.props.selectPlace(index);
    }
    render() {
        const { name, imageUrl, price, priceCurrency } = this.props.place;
        const isSelected =
          this.props.selectedPlace &&
          this.props.selectedPlace.imageUrl === imageUrl;

        return (
            <div 
                onClick={this.handleClick}
                className={`card ${isSelected ? 'active' : ''}`}
                style={{ backgroundImage: `url(${imageUrl})`}}>
                <div className="card-price">{price} {priceCurrency}</div>
                <div className="card-description">{name}</div>
            </div>
        )
    };
}

export default place;