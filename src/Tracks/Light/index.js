import React from 'react';
import Grid from '@mui/material/Grid';
//import lightImage from '../static/songs/LIGHT/Light_Cover.jpg';

function Light(){
    return(
        <React.StrictMode>
            <Grid item xs={12} md={6} className='center-screen'>
                <div className='song-description'>
                    <h1>Light</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </Grid>
            <Grid item xs={12} md={6} className='fondo'>
                <div className='capa-light center-screen'>
                    <img alt='ligth' src='../static/songs/LIGHT/Light_Cover.jpg'></img>
                </div>
            </Grid>
        </React.StrictMode>
    );
}

export {Light};