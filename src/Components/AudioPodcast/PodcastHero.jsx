import React, { useRef, useState } from 'react';
import SongCard from '../SongCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../AudioPodcast/Hero.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div className="bg-[#080B12] py-12 overflow-hidden
    w-full ">
      
      <Swiper
        
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch:0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
             <SongCard
                       description="this is the des"
                       title="title 1"
                       src="https://swiperjs.com/demos/images/nature-1.jpg"
                       sample="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
             />
        </SwiperSlide>
       
        <SwiperSlide>
             <SongCard
                      description="description 2"
                      title="title 2"
                      src="https://swiperjs.com/demos/images/nature-2.jpg"
                      sample="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
                    />
         </SwiperSlide>
       
         <SwiperSlide>
          <SongCard
                    description="this is the des"
                    title="title 1"
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                    sample="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
                  />
        </SwiperSlide>
       
        <SwiperSlide>
            <SongCard
                     description="description 2"
                     title="title 2"
                     src="https://swiperjs.com/demos/images/nature-4.jpg"
                     sample="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
                   />

        </SwiperSlide>
        
        <SwiperSlide>
          <SongCard
                    description="this is the des"
                    title="title 1"
                    src="https://swiperjs.com/demos/images/nature-5.jpg"
                    sample="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
                  />
        </SwiperSlide>
        
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-6.jpg" /> */}

          <SongCard
                    description="description 2"
                    title="title 2"
                    src="https://swiperjs.com/demos/images/nature-6.jpg"
                    sample="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
                  />
        </SwiperSlide>
       
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-7.jpg" /> */}
             
              <SongCard
                       description="this is the des"
                       title="title 1"
                       src="https://swiperjs.com/demos/images/nature-7.jpg"
                       sample="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
                     />

        </SwiperSlide>
       
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-8.jpg" /> */}
           <SongCard
                    description="this is the des"
                    title="title 1"
                    src="https://swiperjs.com/demos/images/nature-8.jpg"
                    sample="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
                  />
        </SwiperSlide>
        
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-9.jpg" /> */}

           <SongCard
                    description="this is the des"
                    title="title 1"
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                    sample="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
                  />
        
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
