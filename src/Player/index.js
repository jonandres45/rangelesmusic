import React from 'react';
//import songPrueba from '../static/songs/prueba.mp3'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css';
import {Context} from '../Context';


function Player(){
    const {refMusic, songTitle} = React.useContext(Context);
//    console.log(refMusic);
//    const music = '../static/songs/RicardoAngeles_PhillipeLois-CrystalColors/RicardoAngeles_PhillipeLois-CrystalColors(OriginalMix).mp3';
    return (
        <React.StrictMode>
            <strong style={{fontSize:'18px'}}>{songTitle}</strong>
            <AudioPlayer 
                src={refMusic} 
    //            layout="horizontal-reverse"
                onPlay={e => console.log("onPlay")}
                autoPlay={false}
            />
        </React.StrictMode>
    );
}

export {Player}