import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Release.css';

function Release(props){
    return (
        <Box
            sx={{
                height: "100vh",
                backgroundColor: 'black',
                color: 'white',
                flexGrow: 1,
                textAlign:'center',
            }}
            id="release"
        >
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                height= "100vh"
            >
                {props.children}
            </Grid>
        </Box>
    );
}

export {Release};