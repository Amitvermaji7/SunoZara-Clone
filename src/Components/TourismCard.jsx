import React from 'react'

export default function TourismCard({title, description , src}) {
  return (
    <div className='text-white static'>
    <img className='rounded-lg' src={src} alt="" />
    <h1>{title}</h1>
    <p className='text-gray-400 w-53'>{description}</p>
    <button className="border-2 border-gray-100 px-4 py-1 rounded-2xl hover:bg-white hover:text-black text-gray-100 transition-all duration-300">
            Explore more
          </button>
</div>
  )
}
