import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import playIcon from '../assets/play.png';
import pauseIcon from '../assets/pause.png';
import nextIcon from '../assets/next.png';
import prevIcon from '../assets/prev.png';

export default function SongCard({ title, description, src, sample, onNext, onPrev, hideControls }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Play/Pause Function
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
    <div className='text-white bg-gray-900 p-4 rounded-lg shadow-lg w-64'>
      <img className='rounded-lg w-full h-40 object-cover' src={src} alt="Song Thumbnail" />


         <div  className="flex justify-center items-center mt-2 space-x-3">
      <button onClick={handlePlayPause} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
            <img src={isPlaying ? pauseIcon : playIcon} className="w-4 h-4" alt="Play/Pause" />
          </button>
          </div>
      
      <h1 className='mt-2 text-lg font-bold'>{title}</h1>
      <p className='text-gray-400'>{description}</p>
      <p className='text-yellow-400'>⭐⭐⭐⭐⭐</p>

      {/* 👇 Next/Prev buttons sirf tab dikhayenge jab hideControls false ho */}
      {!hideControls && (
        <div className="flex justify-center items-center mt-2 space-x-3">
          <button onClick={onPrev} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
            <img src={prevIcon} className="w-4 h-4" alt="Previous" />
          </button>

          {/* <button onClick={handlePlayPause} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
            <img src={isPlaying ? pauseIcon : playIcon} className="w-4 h-4" alt="Play/Pause" />
          </button> */}

          <button onClick={onNext} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
            <img src={nextIcon} className="w-4 h-4" alt="Next" />
          </button>
        </div>
      )}

      {/* Hidden Audio Element */}
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
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  hideControls: PropTypes.bool,  // 👈 hideControls prop add kiya
};
