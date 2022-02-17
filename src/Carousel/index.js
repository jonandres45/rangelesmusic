import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Release } from '../Release';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Light } from '../Tracks/Light';
import { Dopamine } from '../Tracks/Dopamine';
import { Tracks } from '../Tracks';

function Carousel(){

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
            <SwiperSlide>
                <Release>
                  <Light></Light>
                </Release>
            </SwiperSlide>
            <SwiperSlide>
              <Release>
                <Dopamine></Dopamine>
              </Release>
            </SwiperSlide>
            <SwiperSlide>
              <Release>
                <Tracks
                  title="Ejemplo"
                  description="Hola mundo"
                  image="../static/songs/DOPAMINE-REMIX/IMG_7351.jpeg"
                  background="background-light"
                ></Tracks>
              </Release>
            </SwiperSlide>
        </Swiper>
    );

}

export {Carousel};