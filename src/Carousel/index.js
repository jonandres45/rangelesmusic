import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './Carousel.css';

import { Release } from '../Release';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Tracks } from '../Tracks';
import {Context} from '../Context';

function Carousel(){
    const {listTracksOrigin, playAuto} = React.useContext(Context);
    const listTracks = listTracksOrigin;
    return (
        <Swiper 
          onSlideChange={(swiperCore) => {
            const { activeIndex } = swiperCore;
            playAuto(activeIndex);
          }}
          centeredSlides={true}
          autoplay={{
            delay: 16000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiper-container"
        >
          {listTracks.map(track =>(
            <SwiperSlide key={(new Date().getTime()) + track.title}>
              <Release>
                <Tracks
                  title={track.title}
                  description={track.description}
                  image={track.image}
                  background={track.background}
                  song={track.song}                
                  play={track.play}
                />
              </Release>
            </SwiperSlide>
          ))}
        </Swiper>
    );

}

export {Carousel};