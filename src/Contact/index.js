import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Soundcloud from '../static/images/soundcloud.png';
import Spotify from '../static/images/spotify.png';
import Instagram from '../static/images/instagram.png';
import Facebook from '../static/images/facebook.png';

import './Contact.css';

function Contact(){
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                color: 'white',
                flexGrow: 1,
                textAlign:'center',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}
            className="back-contact"
            id="contact"
        >
            <Grid container justifyContent='center'>
                <Grid item xs={12}>
                    <h1 className='title-contact'>Contact</h1>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={10}>
                    <label>Name</label>
                    <input type="text" className='input-form-contact'></input>
                    <label>Email</label>
                    <input type="text" className='input-form-contact'></input>
                    <label>Phone Number</label>
                    <input type="text" className='input-form-contact'></input>
                    <label>Message</label>
                    <textarea className='input-form-contact'></textarea>
                    <button className='btn-send-message'>Send Message</button>
                    <Stack direction="row" spacing={2} marginTop={8} justifyContent='center'>
                        <Avatar alt="Sound Cloud" src={Soundcloud} />
                        <Avatar alt="Sound Cloud" src={Spotify} />
                        <Avatar alt="Sound Cloud" src={Instagram} />
                        <Avatar alt="Sound Cloud" src={Facebook} />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export {Contact};