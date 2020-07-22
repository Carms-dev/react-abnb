import React from 'react';

class place extends React.Component {
    render() {
        const { name, imageUrl, price, priceCurrency } = this.props.place;
        return (
            <div className="card" style={{ backgroundImage: `url(${imageUrl})`}}>
                <div className="card-price">{price} {priceCurrency}</div>
                <div className="card-description">{name}</div>
            </div>
        )
    };
}

export default place;