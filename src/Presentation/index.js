import React from 'react';
import './Presentation.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import video from '../static/videos/richi.mp4';
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
                <source src={video} type="video/mp4"></source>
            </video>
            <div className='capa'></div>
        </div>
    );
}

export {Presentation};