import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import play from '../assets/play.png';
import pause from '../assets/pause.png';


export default function SongCard({ title, description, src, sample }) {
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
        .catch(error => {
          console.error('Error playing audio:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div className='text-white static'>
      <img className='rounded-lg' src={src} alt="" />
      <button className='border-2 border-gray-100 px-4 py-1 rounded-full
 hover:bg-white hover:text-black text-gray-100 transition-all duration-300' onClick={handlePlayPause}><img src={pause ? play : pause} className="w-4 h-4" /></button>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>⭐⭐⭐⭐⭐</p>
      
      {sample && (
        <audio ref={audioRef}>
          <source src={sample} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

SongCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  sample: PropTypes.string.isRequired,
};