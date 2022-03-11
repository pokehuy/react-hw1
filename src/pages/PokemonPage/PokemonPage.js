import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const PokemonPage = () => {
    const [pokemon, setPokemon] = useState({
        name: null,
        frontImage: null,
    });
    useEffect(() => {
        axios({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/1",
        }).then(response => {
            console.log('response = ', response);
            setPokemon({
                name: response.data.name,
                frontImage: response.data.sprites.front_default,
            });
        })
    }, []);
    console.log('pokemon = ', pokemon);
    return (
        <div>
            <h1>Pokemon Page</h1>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.frontImage} alt="pokemon" />
        </div>
    );
}

export default PokemonPage;