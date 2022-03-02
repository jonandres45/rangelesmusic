import React from 'react';
import Grid from '@mui/material/Grid';
import './Tracks.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Avatar from '@mui/material/Avatar';
//import PauseIcon from '@mui/icons-material/Pause';
import {Context} from '../Context';
import LinearProgress from '@mui/material/LinearProgress';

function Tracks(props){
    const {resetStatus} = React.useContext(Context);
    const [player] = React.useState(props.play);

    const playMusic = ()=>{        
        resetStatus(props.title, props.song);
    }
    

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
                        <img alt='ligth' src={props.image} style={{maxWidth: '300px'}}></img>
                            {player ? <LinearProgress/> : 
                            <div className='center-screen'>
                                <Avatar sx={{ width: 60, height: 60, bgcolor:'black' }}>                                
                                    <PlayArrowIcon className='icon-play' sx={{ fontSize: 50, rounded:'1' }} onClick={()=>playMusic()}/>
                                </Avatar>
                            </div>
                            }
                        
                    </div>
                </div>
            </Grid>
        </React.StrictMode>
    );
}

export {Tracks};