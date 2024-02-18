import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import PokemonInfo from './components/PokemonInfo';
import Header from './components/Header';
import ErrorMessage from './components/ErrorMessage';
import './assets/fonts/fonts.css';
import './App.css';

function App() {
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState('');

    function cleanDescription(description) {
        return description.replace(/\f/g, ' ');
    }

    const fetchPokemonData = async (pokemonNameOrId) => {
        setError('');
        setPokemonData(null);

        try {
            const { data: baseData } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId.toLowerCase().replace(/^0+/, '')}`);

            const { data: speciesData } = await axios.get(baseData.species.url);
            const generation = speciesData.generation.name;
            const flavorTextEntries = speciesData.flavor_text_entries.filter(entry => entry.language.name === 'en');
            let description = flavorTextEntries.length > 0 ? flavorTextEntries[0].flavor_text : '';
            description = cleanDescription(description);

            setPokemonData({
                ...baseData,
                generation,
                description
            });

        } catch (error) {
            console.error("There was an error fetching the Pokémon data:", error);
            setError('Pokémon not found');
        }
    };

    return (
        <div className="App">
            <Header />
            <SearchBar onSearch={(e) => {
                e.preventDefault();
                const pokemonName = e.target.elements.pokemonName.value;
                fetchPokemonData(pokemonName);
            }} />
            {error ? <ErrorMessage message={error} /> : pokemonData && <PokemonInfo pokemon={pokemonData} />}
        </div>
    );
}

export default App;