import React from 'react';
import Grid from '@mui/material/Grid';
import './Release.css';

function Release(props){
    return (
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                className='back-release'
                id="release"
            >
                {props.children}
            </Grid>
    );
}

export {Release};