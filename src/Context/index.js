import React from 'react';

const Context = React.createContext();

function ContextProvider(props){
    const obj = [
      {
        title: 'Light ft.Hadja',
        description: '"Light" is the title that Ricardo Angeles has decided to give to his debut single, making this track a new stage in his musical career with his first international collaboration with the multi-instrumentalist and singer “Hadja” under the German label Verflixt Music. After having experimented with other musical genres I decided to focus on producing music that could reflect emotions, coming across Melodic House & Techno which immediately caught my attention and from that moment I started this new adventure',
        image: '../static/songs/LIGHT/Light_Cover.jpg',
        song: '../static/songs/LIGHT/Ricardo_Angeles_Light_feat._Hadja_(Original Mix).mp3',
        background: 'background-light',
        play: false
      },
      {
        title: 'Dopamine (Ricardo Angeles Remix)',
        description: '“Dopamine Remix” a track that has its roots in trance by producer Rehoxx and the melodic foundations of SECMOS form a new experience with the Ricardo Angeles remix taking the best of both parts and transporting it to Melodic House & Techno.',
        image: '../static/songs/DOPAMINE-REMIX/IMG_7351.jpeg',
        song: '../static/songs/DOPAMINE-REMIX/Rehoxx_SECMOS-Dopamine_(RicardoAngelesRemix)_MP3_320KBPS_MASTER.mp3',
        background: 'background-dopamine',
        play: false
      },
      {
        title: 'Ricardo Angeles & Pinkowitz - Hidden Pathway (Original Mix) [OUT SOON]',
        description: '“Working with Ricardo has been an absolute pleasure. We became friends after connecting on Spencer Brown’s Demo streams and discord server, and quickly learned we both share a passion for organic house. With Hidden Pathway, Ricardo shared an excellent melody and track stems - and I built from there. After jamming some synth and adding some additional harmonies and drum sections, Ricardo brought it home with the arrangement and extra polish. Working across time zones was easy with such a great collaborator! This track has been a lot of fun to make, and I hope you enjoy it as well".',
        image: '../static/songs/RicardoAngeles_Pinkowitz-HiddenPathway/hidden_pathway_portada.jpg',
        song: '../static/songs/RicardoAngeles_Pinkowitz-HiddenPathway/RicardoAngeles_Pinkowitz-HiddenPathway(OriginalMix).mp3',
        background: 'background-pinko',
        play: false
      },
      {
        title: 'Ricardo Angeles & Phillipe Lois - Crystal Colors (Original Mix) [OUT SOON]',
        description: 'The meaning and feeling behind this track are how we both Ricardo and Felipe share the same passion for music, how proud we are about being from Latin America which besides having Latin roots we are deeply connected with electronic music which for us is a global expression. It’s finally how music connects people around the globe and erase boarders and the distance between people. When discussing about the landscapes our countries have, we realized that the layers and sections the record has are somehow similar to ‘Caño Cristales’ a lake in Colombia that has 7 colors, and idea with a solid foundation that constantly evolves. ‘Crystal Colors’ is the merge of two cultures that share similar things, of how both countries have such a great relationship and what beautiful landscapes we have that inspire to travel to finally meet the others person culture. We believe we aimed for dance floor vibes and a rave feeling, something energetic, uplifting and exciting.',
        image: '../static/songs/RicardoAngeles_PhillipeLois-CrystalColors/DESIGN_ELEGANT_PHILLIPE LOIS_PORTADA.jpg',
        song: '../static/songs/RicardoAngeles_PhillipeLois-CrystalColors/RicardoAngeles_PhillipeLois-CrystalColors(OriginalMix).mp3',
        background: 'background-crystal',
        play: false
      },
      {
        title: 'RICARDO ANGELES - Citlaltepetl (Original Mix)[EXCLUSIVE FOR VERFLIXT]',
        description: 'In pre-christian antiquity, long before the Teotihuacan, Toltec, and Aztec civilizations, this entire region was called Poyauhtlán. This volcano is the geological representation of the god Poyauhtecatl. That is why the original name of the volcano is Poyautecatl, which means "the one where the mist thins", although it was better known by the name of Citlaltépetl, from the Nahuatl Citlalli (star) and Tepētl (mountain), which together means "star mountain" , because its snowy summit shines all day. A reference that explains the name of “star mountain” is that from one of the neighboring towns to the volcano, Coscomatepec, in the autumn to winter seasons at night, the planet Venus (the brightest star in the sky) could be seen crossing the sky over the crater of the volcano while passing the night.',
        image: '../static/songs/RicardoAngeles-Citlaltepetl/DESIGN_ELEGANT_Citlaltepetl_PORTADA.jpg',
        song: '../static/songs/RicardoAngeles-Citlaltepetl/RICARDOANGELES-Citlaltepetl(OriginalMix)_master_004_15_ene_22.mp3',
        background: 'background-citla',
        play: false
      },
    ]
    const [listTracksOrigin, setlistTracksOrigin] = React.useState(obj);
    const [songTitle, setSongTitle]= React.useState('');

      const resetStatus = (data, song)=>{
        const res = listTracksOrigin.findIndex(obj => obj.title === data);
        const newList = [...obj];
        newList[res].play = true;        
        setlistTracksOrigin(newList);
        setRefMusic(song);
        setSongTitle(data);
      }
    const [refMusic, setRefMusic] = React.useState('');

    const [toggleModal, setToggleModal] = React.useState(false);    

    React.useEffect(()=>{
      setTimeout(()=>{
        setToggleModal(true);
      }, 5000);
    }, []);

    return (
        <Context.Provider value={{
            listTracksOrigin,
            resetStatus,
            refMusic,
            setRefMusic,
            songTitle,
            toggleModal,
            setToggleModal,
        }}>
            {props.children}
        </Context.Provider>
    );
}

export {Context, ContextProvider};