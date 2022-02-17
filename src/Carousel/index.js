import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Release } from '../Release';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Tracks } from '../Tracks';

function Carousel(){
    const listTracks = [
      {
        title: 'Ejemplo 1',
        description: 'Aqui va la descripción 111111111',
        image: '../static/songs/DOPAMINE-REMIX/IMG_7351.jpeg',
        background: 'background-light'
      },
      {
        title: 'Ejemplo 2',
        description: 'Aqui va la descripción 2222222222',
        image: '../static/songs/DOPAMINE-REMIX/IMG_7351.jpeg',
        background: 'background-light'
      },
      {
        title: 'Ejemplo 3',
        description: 'Aqui va la descripción 33333333333',
        image: '../static/songs/DOPAMINE-REMIX/IMG_7351.jpeg',
        background: 'background-light'
      },
    ]
    return (
        <Swiper 
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {listTracks.map(track =>(
            <SwiperSlide>
              <Release>
                <Tracks
                  title={track.title}
                  description={track.description}
                  image={track.image}
                  background={track.background}
                />
              </Release>
            </SwiperSlide>
          ))}
        </Swiper>
    );

}

export {Carousel};