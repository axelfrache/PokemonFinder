import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBar = ({ onSearch }) => {
    return (
        <form onSubmit={onSearch} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', margin: '20px' }}>
            <TextField
                name="pokemonName"
                label="Entrez le nom d'un Pokémon"
                variant="outlined"
                fullWidth
                style={{ maxWidth: '500px' }} // Vous pouvez ajuster ceci pour contrôler la largeur maximale
            />
            <Button type="submit" variant="contained" color="primary">
                Rechercher
            </Button>
        </form>
    );
};

export default SearchBar;