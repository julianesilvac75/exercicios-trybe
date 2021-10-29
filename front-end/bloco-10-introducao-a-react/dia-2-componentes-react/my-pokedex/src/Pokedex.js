import React, { Component } from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";
import "./Pokedex.css"


class Pokedex extends Component {
    render() {
        const pokemonsList = pokemons.map((pokemon, index) => {
            const { name, type, averageWeight, image } = pokemon;
            return (
                    <Pokemon key={index} name={name} type={type} weight={averageWeight.value} measurementUnit={averageWeight.measurementUnit} image={image}/>
            );
        })

        return (
            <article>
                <h1 className="pokedex-title">Pokedex</h1>
                <div className="pokedex-container">
                    {pokemonsList}
                </div>
            </article>
        )
    }
}

export default Pokedex;