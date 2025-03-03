import React from 'react'
import boy from '../assets/boy.png'

const Hero = () => {
  return (
    <section className="bg-[#080B12] text-white flex flex-col text-center py-20 px-4">
        <input type="text"
        placeholder='search stories, songs...'
        className='w-80 max-w-lg bg-gray-800 flex items-center rounded-md p-2 text-white mt-6 mx-4 outline-solid'
        
        
        />
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Bihar's
				<span className="dark:text-violet-600">Heritage</span> in Audio
			</h1>
			<p className="mt-6 mb-10 text-lg sm:mb-14">Experience the rich cultural heritage of Bihar through
				<br  className="hidden md:inline lg:hidden" /> immersive audio stories, folk tales, and literature.listen, learn, and connect with our root.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<button className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 bg-yellow-600 rounded-md mx-4">Download App</button>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Learn more→</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={boy} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
  )
}

export default Hero;