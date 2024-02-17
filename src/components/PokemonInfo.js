import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const PokemonInfo = ({ pokemon }) => {
    if (!pokemon) return null;

    return (
        <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
            <CardMedia
                component="img"
                height="300"
                image={pokemon.image}
                alt={pokemon.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pokemon.name} (#{pokemon.pokedexId})
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PokemonInfo;