import React from 'react';
import './Presentation.css';
import video from '../static/video/richi.mp4';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Avatar from '@mui/material/Avatar';

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
                        <h1 className='titulo'>Ricardo Angeles</h1>
                        <p className='subtitle-ri'>Music producer & Creative</p>
                    </Grid>
                    
                    <Grid item xs={12} style={{ justifyContent: "center", display: "flex" }}>
                        <Avatar sx={{ width: 60, height: 60, bgcolor:'black' }}>
                            <PlayArrowIcon className='icon-play' sx={{ fontSize: 50 }}></PlayArrowIcon>
                        </Avatar>
                    </Grid>
                </Grid>
            </Box>
            </div>
            <video muted autoPlay loop>
                    <source src={video} type="video/mp4"></source>
                </video>
            <div className='capa'></div>
        </div>
    );
}

export {Presentation};