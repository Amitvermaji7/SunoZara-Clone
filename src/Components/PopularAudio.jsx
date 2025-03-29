import React, { useState, useRef } from 'react';
import SongCard from './SongCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import '../AudioPodcast/Hero.css';

import { EffectCoverflow, Pagination, Autoplay} from 'swiper/modules';

export default function PodcastHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const songs = [
    {
      title: "Song 1",
      description: "This is song 1",
      src: "https://swiperjs.com/demos/images/nature-1.jpg",
      sample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      title: "Song 2",
      description: "This is song 2",
      src: "https://swiperjs.com/demos/images/nature-2.jpg",
      sample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      title: "Song 3",
      description: "This is song 3",
      src: "https://swiperjs.com/demos/images/nature-3.jpg",
      sample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
      title: "Song 4",
      description: "This is song 4",
      src: "https://swiperjs.com/demos/images/nature-5.jpg",
      sample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
      title: "Song 5",
      description: "This is song 5",
      src: "https://swiperjs.com/demos/images/nature-4.jpg",
      sample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
      title: "Song 6",
      description: "This is song 5",
      src: "https://swiperjs.com/demos/images/nature-6.jpg",
      sample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    {
      title: "Song 7",
      description: "This is song 5",
      src: "https://swiperjs.com/demos/images/nature-7.jpg",
      sample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
    {
      title: "Song 8",
      description: "This is song 5",
      src: "https://swiperjs.com/demos/images/nature-8.jpg",
      sample: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    },
  ];

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(newIndex);
    if (swiperRef.current) {
      swiperRef.current.slideTo(newIndex);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    if (swiperRef.current) {
      swiperRef.current.slideTo(newIndex);
    }
  };

  return (
    <>
    
    <h2 className="text-3xl text-white font-bold pl-4 bg-[#080B12]">
    Popular Audio Podcast
  </h2>


    <div className="bg-[#080B12] py-12 overflow-hidden w-full">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true} 
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {songs.map((song, index) => (
          <SwiperSlide key={index}>
            <SongCard
              title={song.title}
              description={song.description}
              src={song.src}
              sample={song.sample}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
}
