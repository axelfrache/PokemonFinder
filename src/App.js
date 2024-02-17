// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import PokemonInfo from './components/PokemonInfo';
import Header from "./components/Header";

function App() {
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (event) => {
    event.preventDefault();
    const pokemonName = event.target.elements.pokemonName.value;
    const response = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonName}`);
    setPokemon(response.data);
  };

  return (
      <div className="App">
        <Header/>{}
        <SearchBar onSearch={fetchPokemon} />
        <PokemonInfo pokemon={pokemon} />
      </div>
  );
}

export default App;
