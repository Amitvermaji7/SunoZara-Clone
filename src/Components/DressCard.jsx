import React from 'react'

export default function DressCard({title, description , src}) {
  return (
    <div className='text-white static'>
        <img className='rounded-lg' src={src} alt="" />
        <h1>{title}</h1>
        <p className='line-through inline text-red-600'>{description}</p> <p className='inline text-green-500'>499</p>
        <p>⭐⭐⭐⭐⭐</p>
    </div>
  )
}

