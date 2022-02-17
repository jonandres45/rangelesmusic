import './App.css';
import { MenuDesk } from '../Menu/MenuDesk';
import { Presentation } from '../Presentation';
import { Contact } from '../Contact';
import { Carousel } from '../Carousel';
import { MenuMobil } from '../Menu/MenuMobil';
import { FlexBar } from '../FlexBar';
import { Player } from '../Player';

function App() {
  return (
    <div>
        <MenuDesk></MenuDesk>
        <Presentation></Presentation>
        <Carousel></Carousel>
        <Contact></Contact>
        <FlexBar> {/* Menú flex (reproductor y menú mobil) */}
          <Player></Player>          
          <MenuMobil></MenuMobil>
        </FlexBar>
    </div>
  );
}

export default App;
