// PokemonInfo.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import '../assets/fonts/fonts.css';

const cardStyles = {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    margin: '20px auto',
    maxWidth: 800,
    overflow: 'hidden',
    backgroundColor: '#f6f6f6',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
};

const contentStyles = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    padding: 2,
    fontFamily: 'Arial, PokemonPixel',
};

const PokemonInfo = ({ pokemon }) => {
    if (!pokemon) return null;
    const types = pokemon.types.map(typeInfo => typeInfo.type.name).join(', ');
    const abilities = pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
    const { generation, description } = pokemon;

    return (
        <Card sx={cardStyles}>
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
            <CardContent sx={contentStyles}>
                <Stack spacing={2}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'PokemonPixel', textAlign: 'left', fontSize: '2rem' }}>
                        {pokemon.name} (#{pokemon.id})
                    </Typography>
                    <Divider variant="middle" sx={{ bgcolor: 'primary.main' }} />
                    <Typography variant="subtitle1" component="p" sx={{ fontFamily: 'Roboto', fontSize: '1rem' }}>
                        <b>Description:</b> {description}
                    </Typography>
                    <Typography variant="subtitle1" component="p" sx={{ fontFamily: 'Roboto', fontSize: '1rem' }}>
                        <b>Type:</b> <span style={{ color: '#4A90E2' }}>{types}</span>
                    </Typography>
                    <Typography variant="subtitle1" component="p" sx={{ fontFamily: 'Roboto', fontSize: '1rem' }}>
                        <b>Generation:</b> {generation.replace('generation-', '').toUpperCase()}
                    </Typography>
                    <Typography variant="subtitle1" component="p" sx={{ fontFamily: 'Roboto', fontSize: '1rem' }}>
                        <b>Abilities:</b> {abilities}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default PokemonInfo;