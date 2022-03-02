import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Soundcloud from '../static/images/soundcloud.png';
import Spotify from '../static/images/spotify.png';
import Instagram from '../static/images/instagram.png';
import Facebook from '../static/images/facebook.png';
import Stack from '@mui/material/Stack';
import './Footer.css';

function Footer(){
    return(
        <footer>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container textAlign="center">
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={2} marginTop={2} justifyContent='center'>
                            <a href="https://soundcloud.com/rangelesmusic" target="_blank" rel="nofollow noopener noreferrer">
                                <Avatar alt="Sound Cloud" src={Soundcloud} />
                            </a>
                            <a href="https://open.spotify.com/artist/5FDOgnjOJGdjIJwOuQl4LQ" target="_blank" rel="nofollow noopener noreferrer">
                                <Avatar alt="Spotify" src={Spotify} />
                            </a>
                            <a href="https://www.instagram.com/rangelesmusic/" target="_blank" rel="nofollow noopener noreferrer">
                                <Avatar alt="Instagram" src={Instagram} />
                            </a>
                            <a href="https://www.facebook.com/rangelesmusic" target="_blank" rel="nofollow noopener noreferrer">
                                <Avatar alt="Facebook" src={Facebook} />
                            </a>
                        </Stack>
                        <h2>© 2022 Ricardo Angeles. All Rights Reserved</h2>
                        <h3>
                            <a href="mailto:contact@rangelesmusic.com?subject=Hi" style={{color:'white', textDecoration:'none'}}>contact@rangelesmusic.com</a>
                        </h3>
                        <h4>
                            <a href="mailto:ansa1315@outlook.es" style={{color:'white', textDecoration:'none'}}>Designed by Andrés Ortiz</a>
                        </h4>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    );
}

export {Footer};