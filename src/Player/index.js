import React from 'react';
//import songPrueba from '../static/songs/prueba.mp3'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css';
import {Context} from '../Context';

function Player(){
    const {refMusic} = React.useContext(Context);
//    console.log(refMusic);
//    const music = '../static/songs/RicardoAngeles_PhillipeLois-CrystalColors/RicardoAngeles_PhillipeLois-CrystalColors(OriginalMix).mp3';
    return (
        <AudioPlayer 
            src={refMusic} 
            layout="horizontal-reverse"
            onPlay={e => console.log("onPlay")}
            autoPlay={false}
        />
    );
}

export {Player}