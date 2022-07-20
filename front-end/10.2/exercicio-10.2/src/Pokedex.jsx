import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

class Pokedex extends React.Component {
    render() {
        const pokeList = pokemons.map((d) => <Pokemon name={d.name} type={d.type} weigth= {`${d.averageWeight.value}${d.averageWeight.measurementUnit}`} img={d.image}/>)
        return (
            pokeList
        )
    }
}

export default Pokedex