import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Pokemon Finder
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
