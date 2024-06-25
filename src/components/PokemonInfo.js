import React from 'react';
import { Card, CardContent, Typography, CardMedia, Divider, Stack } from '@mui/material';
import '../assets/fonts/fonts.css';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
    initial: { x: '-100vw' },
    animate: { x: 0, transition: { type: 'spring', stiffness: 25 } },
    exit: { x: '100vw', transition: { duration: 0.5 } },
};

const cardStyles = {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    margin: '20px auto',
    maxWidth: 800,
    overflow: 'hidden',
    backgroundColor: '#f6f6f6',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 0 20px 0 rgba(0,0,0,0.3)',
    },
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
    const { generation, description, id } = pokemon;

    return (
        <AnimatePresence>
            <motion.div
                key={id}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Card sx={cardStyles} component={motion.div} whileHover={{ scale: 1.05 }}>
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
                                {pokemon.name} (#{id})
                            </Typography>
                            <Divider variant="middle" sx={{ bgcolor: '#ef233c' }} />
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
            </motion.div>
        </AnimatePresence>
    );
};

export default PokemonInfo;
