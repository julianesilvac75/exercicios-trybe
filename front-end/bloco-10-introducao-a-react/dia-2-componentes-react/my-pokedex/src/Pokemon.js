import React, { Component } from "react";
import "./Pokemon.css"

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

export default Pokemon;