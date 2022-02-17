import React from 'react';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function FlexBar(props){
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
    return(
        <Slide appear={false} direction="up" in={!trigger}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:'10', }} elevation={3}>
                {children}
            </Paper>
        </Slide>
    );
}

export {FlexBar};