import React from 'react';
import logo from '../static/images/logo.png';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Load(){
    return (
        <Box className='conte'>
                <div className='hijo'>
                <img 
                alt="Ricardo Angeles" 
                src={logo}
                />
                    <LinearProgress/>
                </div>
            </Box>
    );
}

export {Load}