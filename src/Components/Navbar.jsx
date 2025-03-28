import React from "react";
import { Link } from "react-router-dom";  // React Router ka Link import karna zaroori hai
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="bg-[#0A0A0A] text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center h-20">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="" className="w-[150px]" />
        </a>

        {/* Nav Links */}
        <nav className="hidden lg:flex gap-10 text-lg">
          <a href="#" className="hover:text-yellow-400 transition-all duration-300">Local Tourism</a>
          <a href="#" className="hover:text-yellow-400 transition-all duration-300">About</a>
          <a href="#" className="hover:text-yellow-400 transition-all duration-300">Contact Us</a>

          {/* Audio Podcast Button */}
          <Link to="/podcast">
            <button className="border border-gray-400 rounded px-4 py-1 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Audio Podcast
            </button>
          </Link>
        </nav>

        {/* Buttons */}
        <div className="hidden lg:flex gap-4">
          <button className="px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Shop
          </button>
          <button className="border border-gray-100 px-4 py-1 rounded hover:bg-white hover:text-black text-gray-100 transition-all duration-300">
            Log in
          </button>
        </div>

        {/* Hamburger Menu */}
        <button className="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
