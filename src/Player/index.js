import React from 'react';
//import songPrueba from '../static/songs/prueba.mp3'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css';

function Player(){

    const music = '../static/songs/DOPAMINE-REMIX/Rehoxx _ SECMOS - Dopamine (Ricardo Angeles Remix)_MP3_320KBPS_MASTER.mp3';
    return (
        <AudioPlayer 
            src={'../static/songs/prueba.mp3'} 
            layout="horizontal-reverse"
            onPlay={true}
        />
    );
}

export {Player}