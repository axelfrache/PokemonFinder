import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Icon from '../assets/images/logo.png';
import '../assets/fonts/fonts.css';

class Header extends Component {
    render() {
        return (
            <AppBar position="static" sx={{ backgroundColor: '#e12929' }}>
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <img src={Icon} alt="logo" style={{ marginRight: 10, width: 40, height: 40 }} />
                        <Typography variant="h6" component="div" sx={{fontFamily: 'Roboto', textShadow: '1px 1px 1px #000000', fontSize: '1.5rem'}}>
                            Pokemon Finder
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;