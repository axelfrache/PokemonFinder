import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBar = ({ onSearch }) => {
    return (
        <form onSubmit={onSearch} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', margin: '20px' }}>
            <TextField
                name="pokemonName"
                label="Enter a Pokémon name or ID"
                variant="outlined"
                fullWidth
                style={{ maxWidth: '500px' }}
            />
            <Button type="submit" variant="contained" color="primary">
                Search
            </Button>
        </form>
    );
};

export default SearchBar;