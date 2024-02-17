import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import '../assets/fonts/fonts.css';

const PokemonInfo = ({ pokemon }) => {
    if (!pokemon) return null;

    const types = pokemon.types.map((typeInfo) => typeInfo.type.name).join(', ');
    const games = pokemon.game_indices.map((gameIndex) => gameIndex.version.name).join(', ');
    // Map the abilities to their names, and join them with a comma if there are multiple abilities.
    const abilities = pokemon.abilities.map((abilityInfo) => abilityInfo.ability.name).join(', ');

    return (
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, margin: '20px auto', maxWidth: 800, overflow: 'hidden' }}>
            <CardMedia
                component="img"
                sx={{
                    width: { xs: '100%', sm: 170 },
                    height: { xs: 170, sm: 'auto' },
                    objectFit: 'contain',
                }}
                image={pokemon.sprites.front_default}
                alt={pokemon.name}
            />
            <CardContent sx={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'Arial, PokemonPixel', padding: 2 }}>
                <Stack spacing={2}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'PokemonPixel', textAlign: 'left', fontSize: '2rem' }}>
                        {pokemon.name} (#{pokemon.id})
                    </Typography>
                    <Divider variant="middle" sx={{ bgcolor: 'primary.main' }} />
                    <Typography variant="subtitle1" component="p" sx={{ fontFamily: 'Roboto', fontSize: '1rem' }}>
                        Type: {types}
                    </Typography>
                    <Typography variant="subtitle1" component="p" sx={{ fontFamily: 'Roboto', fontSize: '1rem' }}>
                        Abilities: {abilities}
                    </Typography>
                    <Divider variant="middle" sx={{ bgcolor: 'primary.light' }} />
                    <Typography variant="subtitle1" component="p" sx={{ fontFamily: 'Roboto', fontSize: '1rem' }}>
                        Appears in: {games}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default PokemonInfo;