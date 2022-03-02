import React from 'react';
import './App.css';
import { MenuDesk } from '../Menu/MenuDesk';
import { Presentation } from '../Presentation';
import { Contact } from '../Contact';
import { Carousel } from '../Carousel';
import { MenuMobil } from '../Menu/MenuMobil';
import { FlexBar } from '../FlexBar';
import { Player } from '../Player';
import { Footer } from '../Footer';

function AppUI(){
    return (
        <React.Fragment>
            <MenuDesk></MenuDesk>
            <Presentation></Presentation>
            <Carousel></Carousel>
            <Contact></Contact>
            <FlexBar> {/* Menú flex (reproductor y menú mobil) */}
            <Player></Player>          
                <MenuMobil></MenuMobil>
            </FlexBar>
            <Footer/>
        </React.Fragment>
    );
}

export {AppUI};