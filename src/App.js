import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import PokemonInfo from './components/PokemonInfo';
import Header from './components/Header';
import ErrorMessage from './components/ErrorMessage'; // Importez le nouveau composant d'erreur
import './assets/fonts/fonts.css';

function App() {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState('');

    const fetchPokemon = async (event) => {
        event.preventDefault();
        let pokemonName = event.target.elements.pokemonName.value;
        pokemonName = pokemonName.toLowerCase().replace(/^0+/, '');

        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            setPokemon(response.data);
            setError('');
        } catch (error) {
            console.error("There was an error fetching the Pokémon data", error);
            setPokemon(null);
            setError('Pokémon not found'); // Set the error message
        }
    };

    return (
        <div className="App">
            <Header />
            <SearchBar onSearch={fetchPokemon} />
            {error && <ErrorMessage message={error} />} {/* Affiche le message d'erreur si error n'est pas vide */}
            {pokemon && <PokemonInfo pokemon={pokemon} />}
        </div>
    );
}

export default App;