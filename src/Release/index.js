import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Release.css';

function Release(props){
    return (
        <Box        
            id="release"
            sx={{ flexGrow: 1 }}
        >
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                className='back-release'
            >
                {props.children}
            </Grid>
        </Box>
    );
}

export {Release};