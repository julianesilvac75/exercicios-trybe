import React, { Component } from "react";

class Pokemon extends Component {
    render() {
        const { name, type, weight, measurementUnit, image} = this.props;
        return (
            <div className="pokemon-container">
                <p className="pokemon-name">{name}</p>
                <img src={image} alt={name}></img>
                <p>Type: {type}</p>
                <p>Average weight: {weight} {measurementUnit}</p>
            </div>
        );
    }
}

export default Pokemon;