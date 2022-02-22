import React from 'react';
import Grid from '@mui/material/Grid';
import './Tracks.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Avatar from '@mui/material/Avatar';
import PauseIcon from '@mui/icons-material/Pause';


function Tracks(props){
    const img = props.image;
    const [playIcon, setPlayIcon] = React.useState(true);
    let icon = "";

    if(playIcon)icon = <PlayArrowIcon className='icon-play' sx={{ fontSize: 50 }} onClick={()=>toggleMusic()}/>;
    else icon = <PauseIcon className='icon-play' sx={{ fontSize: 50 }} onClick={()=>toggleMusic()}/>
    

    const toggleMusic = ()=>{
        setPlayIcon(false);
    };

    return(
        <React.StrictMode>
            <Grid item xs={12} md={6} className='center-screen'>
                <div className='song-description'>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </Grid>
            <Grid item xs={12} md={6} className={props.background}>
                <div className="center-screen capa-light">
                    <div>
                        <img alt='ligth' src={img} style={{maxWidth: '300px'}}></img>
                        <div className='center-screen'>
                            <Avatar sx={{ width: 60, height: 60, bgcolor:'black' }}>                                
                                {icon}
                            </Avatar>
                        </div>
                    </div>
                </div>
            </Grid>
        </React.StrictMode>
    );
}

export {Tracks};