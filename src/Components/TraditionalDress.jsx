import React from 'react'
import DressCard from './DressCard'

const TraditionalDress = () => {
  return (
    <>
    <div className='bg-[#161D2F] py-12 overflow-hidden w-full'> 
    <h2 className="text-3xl text-white font-bold mb-6 pl-4">
    Popular Audio Podcast
  </h2>
  </div>
  <div className='relative w-full flex gap-22 py-6 overflow-x-auto scrollbar-hid bg-[#080B12] py-12 overflow-hidden'>
    <DressCard description='599' title='Bihar traditional dress' src='https://picsum.photos/200/200/?blur=9'/>
    <DressCard description='599' title='Bihar traditional dress' src='https://picsum.photos/seed/picsum/200/200'/>
    <DressCard description='599' title='Bihar traditional dress' src='https://picsum.photos/200/200/?blur=9'/>
    <DressCard description='599' title='Bihar traditional dress' src='https://picsum.photos/200/200/?blur=9'/>
    <DressCard description='599' title='Bihar traditional dress' src='https://picsum.photos/200/200/?blur=9'/>
    <DressCard description='599' title='Bihar traditional dress' src='https://picsum.photos/200/200/?blur=9'/>
  </div>
  </>
  )
}

export default TraditionalDress;