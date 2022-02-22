import React from 'react';
//import songPrueba from '../static/songs/prueba.mp3'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css';

function Player(){

    const music = '../static/songs/RicardoAngeles_PhillipeLois-CrystalColors/RicardoAngeles_PhillipeLois-CrystalColors(OriginalMix).mp3';
    return (
        <AudioPlayer 
            src={music} 
            layout="horizontal-reverse"
            onPlay={true}
        />
    );
}

export {Player}