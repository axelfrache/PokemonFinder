import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 3, mt: 'auto', backgroundColor: 'transparent', color: 'text.primary' }}>
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
                    Developed with <FavoriteIcon sx={{ fontSize: 16, verticalAlign: 'middle', color: '#ef233c' }} /> • © {new Date().getFullYear()} Axel Frache. All rights reserved.
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                    <IconButton aria-label="GitHub" href="https://github.com/axelfrache" target="_blank" rel="noopener noreferrer" sx={{ color: 'text.primary' }}>
                        <GitHubIcon fontSize="large" />
                    </IconButton>
                    <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/axel-frache" target="_blank" rel="noopener noreferrer" sx={{ color: 'text.primary' }}>
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;