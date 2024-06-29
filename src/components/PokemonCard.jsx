import React from 'react';
import { Card, CardContent, Typography, CardMedia, Divider, Stack, CircularProgress } from '@mui/material';
import '../assets/fonts/fonts.css';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 10 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const cardStyles = {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    margin: '20px auto',
    width: '90%',
    minWidth: 300,
    maxWidth: 600,
    overflow: 'hidden',
    backgroundColor: '#f6f6f6',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 0 20px 0 rgba(0,0,0,0.3)',
    },
};

const contentStyles = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    fontFamily: 'Arial, PokemonPixel',
};

const PokemonCard = ({ pokemon, loading, isShiny }) => {
    if (loading) {
        return (
            <AnimatePresence>
                <motion.div
                    key="loading"
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <Card sx={cardStyles}>
                        <CardContent sx={contentStyles}>
                            <CircularProgress />
                        </CardContent>
                    </Card>
                </motion.div>
            </AnimatePresence>
        );
    }

    if (!pokemon) return null;
    const types = pokemon.types.map(typeInfo => typeInfo.type.name).join(', ');
    const abilities = pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
    const { generation, description, id } = pokemon;
    const imageUrl = isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default;

    return (
        <AnimatePresence>
            <motion.div
                key={id}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Card sx={cardStyles}>
                    <CardMedia
                        component="img"
                        sx={{
                            width: { xs: '100%', sm: 170 },
                            height: { xs: 170, sm: 'auto' },
                            objectFit: 'contain',
                        }}
                        image={imageUrl}
                        alt={pokemon.name}
                    />
                    <CardContent sx={contentStyles}>
                        <Stack spacing={2} alignItems="left">
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'PokemonPixel', textAlign: 'left', fontSize: '2rem' }}>
                                {pokemon.name} (#{id})
                            </Typography>
                            <Divider variant="middle" sx={{ bgcolor: '#ef233c', width: '100%' }} />
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

export default PokemonCard;
