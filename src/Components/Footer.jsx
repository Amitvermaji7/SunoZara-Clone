import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook, FaYoutube, FaInstagramSquare } from 'react-icons/fa';
import { TbBrandLinkedinFilled } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="bg-[#080B12] text-gray-400 text-sm">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      
          <div>
            <h2 className="text-white text-lg font-semibold flex items-center gap-2">
              <img
                src={logo}
                alt="SunoZara Logo"
                className="w-46 h-8"
              />
            </h2>
            <p className="mt-2">
              Bihar's first cultural heritage audio platform
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-3 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-500 cursor-pointer">
                Shop
              </li>
              <li className="hover:text-yellow-500 cursor-pointer">
                About Us
              </li>
              <li className="hover:text-yellow-500 cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-yellow-500 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-white font-bold mb-3 uppercase">
              Categories
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-500 cursor-pointer">
                Local Tourism
              </li>
              <li className="hover:text-yellow-500 cursor-pointer">
                Lokgeet
              </li>
              <li className="hover:text-yellow-500 cursor-pointer">
                Loknritya
              </li>
              <li className="hover:text-yellow-500 cursor-pointer">
                Bhojpuri
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-3 uppercase">
              Contact
            </h3>
            <p>Sahityakriti India Pvt Ltd</p>
            <p>Maurya Lok, Patna - 800001</p>
            <p>+91 8076831265</p>

            <div className="mt-4 flex gap-3 text-xl">
              <a href="#" className="text-red-500 hover:text-yellow-500">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-yellow-500">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-yellow-500">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-yellow-500">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div>
             <ul className='decoration-none flex gap-2'>
             <li>
             <FaYoutube className='text-red-500' />
              </li>
              <li>
              <FaFacebook className='text-blue-500' />
              </li>
              <li>
              <FaInstagramSquare className='text-pink-600' />
              </li>
              <li>
              <TbBrandLinkedinFilled className='text-blue-600'/>
              </li>
             </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          2025 SunoZara. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer