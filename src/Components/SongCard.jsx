import React from 'react'

export default function SongCard({title, description , src}) {
  return (
    <div className='text-white static'>
        <img className='rounded-lg' src={src} alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>⭐⭐⭐⭐⭐</p>
    </div>
  )
};
