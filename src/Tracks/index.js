import React from 'react';
import Grid from '@mui/material/Grid';
import './Tracks.css';

function Tracks(props){
    const img = props.image;
    return(
        <React.StrictMode>
            <Grid item xs={12} md={6} className='center-screen'>
                <div className='song-description'>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </Grid>
            <Grid item xs={12} md={6} className={props.background}>
                <div className='capa-light center-screen'>
                    <img alt='ligth' src={img} style={{maxWidth: '300px'}}></img>
                </div>
            </Grid>
        </React.StrictMode>
    );
}

export {Tracks};