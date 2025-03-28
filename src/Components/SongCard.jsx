import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import play from '../assets/play.png';
import pause from '../assets/pause.png';

export default function SongCard({ title, description, src, sample }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.error('Error playing audio:', error));
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className='text-white static bg-gray-900 p-4 rounded-lg shadow-lg w-64'>
      <img className='rounded-lg w-full h-40 object-cover' src={src} alt="Song Thumbnail" />
      
      <h1 className='mt-2 text-lg font-bold'>{title}</h1>
      <p className='text-gray-400'>{description}</p>
      <p className='text-yellow-400'>⭐⭐⭐⭐⭐</p>

      <button 
        className='border-2 border-gray-100 px-4 py-2 rounded-full mt-2 flex items-center 
        hover:bg-white hover:text-black text-gray-100 transition-all duration-300' 
        onClick={handlePlayPause}
      >
        <img src={isPlaying ? pause : play} className="w-4 h-4 mr-2" alt="Play/Pause" />
        {isPlaying ? "Pause" : "Play"}
      </button>

      {sample && (
        <audio ref={audioRef} className="hidden">
          <source src={sample} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

SongCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  sample: PropTypes.string.isRequired,
};
