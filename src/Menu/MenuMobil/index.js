import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import {handleClick} from '../Helpers';
import './MenuMobil.css';

function MenuMobil(){
    const [value, setValue] = React.useState(0);
    return (
        <div
        className='menu-mobil'>
            <BottomNavigation
                style={{background: 'rgb(41, 41, 41)'}}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction 
                    style={{color:'white'}} 
                    label="Home" 
                    icon={<HomeIcon />}
                    onClick={(event)=> handleClick(event, '#home')}
                />
                <BottomNavigationAction 
                    style={{color:'white'}} 
                    label="Release" 
                    icon={<MusicNoteIcon />}
                    onClick={(event)=> handleClick(event, '#release')}
                />
                <BottomNavigationAction 
                    style={{color:'white'}} 
                    label="Contact" 
                    icon={<ConnectWithoutContactIcon />}
                    onClick={(event)=> handleClick(event, '#contact')}
                />
            </BottomNavigation>
        </div>
    );
}

export {MenuMobil};