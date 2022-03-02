import React from 'react';
import './Presentation.css';
//import video from '../static/video/richi.mp4';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Presentation(){
    return(
        <div className='hero' id="home">
            <div className='promo'>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
            >
                <Grid>
                    <Grid item xs={12}>
                        <h1 className='titulo linear-wipe'>Ricardo Angeles</h1>
                        <p className='subtitle-ri' >DJ / Music producer & Creative</p>
                    </Grid>
                </Grid>
            </Box>
            </div>
            <img src="../static/media/production_ID_4188339.png" className='image-video' alt='imageNotvideo'></img>
            <video muted autoPlay loop className='image-video'>
                <source src={'../static/video/richi.mp4'} type="video/mp4"></source>
            </video>
            <div className='capa'></div>
        </div>
    );
}

export {Presentation};