import React from 'react'
import logo from '../assets/logo.png'


export default function Navbar() {
  return (
    <header className="p-4 bg-gray-900 text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<img src={logo} alt="" className='w-46' />
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- text-violet-600 dark:border-violet-600">Local tourism</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- text-violet-600 dark:border-violet-600">About</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- text-violet-600 dark:border-violet-600">contact us</a>
			</li>
<button
  className="flex justify-center gap-2 items-center mx-auto shadow-xl-200 text-lg bg-gray-50 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
>
  Audio Poadcast
</button>

		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center px-8 py-3 rounded text-gray-50">Shop</button>
			<button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50">Sign up</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
  )
}
