import React, { Component } from "react";
import "./Pokemon.css"
import PropTypes  from "prop-types";

class Pokemon extends Component {
    render() {
        const { name, type, weight, measurementUnit, image} = this.props;
        return (
            <section className="pokemon-container">
                <p className="pokemon-name">{name}</p>
                <img src={image} alt={name}></img>
                <div className="info-container">
                    <span className="info">Type: {type}</span>
                    <span className="info">Average weight: {weight} {measurementUnit}</span>
                </div>
            </section>
        );
    }
}

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Pokemon;