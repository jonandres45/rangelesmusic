import React from 'react';
import AppBar from '@mui/material/AppBar';
import './MenuDesk.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../../static/images/logo.png';
import {handleClick} from '../Helpers';

function MenuDesk(){
    return (
        <Box sx={{ flexGrow: 1, display:{xs:'none', md:'block'} }}>
        <AppBar position="fixed" color="transparent" sx={{boxShadow: 0}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img 
                alt="Ricardo Angeles" 
                src={logo}
                />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
            </Typography>
            <Button 
              color="inherit" 
              sx={{m:5}}
              onClick={(event)=> handleClick(event, '#home')}
            >
                <span className='btn-menu'> Home </span>
            </Button>
            <Button 
              color="inherit" 
              sx={{m:5}}
              onClick={(event)=> handleClick(event, '#release')}
            >
                <span className='btn-menu'> Releases </span>
            </Button>
            <Button 
              color="inherit" 
              sx={{m:5}}
              onClick={(event)=> handleClick(event, '#contact')}
              >
                <span className='btn-menu'> Contact </span>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}


export {MenuDesk};