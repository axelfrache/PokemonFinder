import React, { useState } from 'react';
import axios from 'axios';
import { CircularProgress, Snackbar, Alert } from '@mui/material';
import SearchBar from './components/SearchBar';
import PokemonInfo from './components/PokemonInfo';
import Header from './components/Header';
import './assets/fonts/fonts.css';
import './App.css';

function App() {
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const cleanDescription = (description) => description.replace(/\f/g, ' ');

    const fetchPokemonData = async (pokemonNameOrId) => {
        setError('');
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
            console.error("Error fetching Pokémon data:", error);
            setError('Pokémon not found. Please try a different name or ID.');
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
            {error && (
                <Snackbar
                    open={error !== ''}
                    autoHideDuration={6000}
                    onClose={() => setError('')}
                    TransitionProps={{ timeout: { enter: 500, exit: 500 } }}
                >
                    <Alert
                        onClose={() => setError('')}
                        severity="error"
                        sx={{
                            width: '100%',
                            backgroundColor: '#f6f6f6'
                        }}
                    >
                        {error}
                    </Alert>
                </Snackbar>
            )}
            {pokemonData && <PokemonInfo pokemon={pokemonData} />}
        </div>
    );
}

export default App;
