import React, { useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/PokemonCard';
import Header from './components/Header';
import './assets/fonts/fonts.css';
import './App.css';

function App() {
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(false);

    const cleanDescription = (description) => description.replace(/\f/g, ' ');

    const fetchPokemonData = async (pokemonNameOrId) => {
        setPokemonData(null);
        setLoading(true);

        try {
            const sanitizedInput = pokemonNameOrId.toLowerCase().replace(/^0+/, '');
            const baseResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${sanitizedInput}`);
            const speciesResponse = await axios.get(baseResponse.data.species.url);

            const generation = speciesResponse.data.generation.name;
            const flavorTextEntries = speciesResponse.data.flavor_text_entries.filter(entry => entry.language.name === 'en');
            let description = flavorTextEntries.length > 0 ? flavorTextEntries[0].flavor_text : 'No description available.';
            description = cleanDescription(description);

            setPokemonData({
                ...baseResponse.data,
                generation,
                description
            });
        } catch (error) {
            window.alert('Pokémon not found. Please try a different name or ID.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <Header />
            <SearchBar onSearch={(e) => {
                e.preventDefault();
                const pokemonName = e.target.elements.pokemonName.value.trim();
                if (pokemonName) fetchPokemonData(pokemonName);
            }} />
            {loading && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
                    <CircularProgress />
                </div>
            )}
            {pokemonData && <PokemonCard pokemon={pokemonData} />}
        </div>
    );
}

export default App;
