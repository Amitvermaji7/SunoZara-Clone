import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logo from '../../assets/logo.png';
import home from '../../assets/home.png';

export default function AudioSidebar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="rounded-lg">
      {/* Toggle Button */}
      <button
        className="fixed top-5 left-5 bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 h-9/10 w-64 bg-[#151820] text-white p-6 shadow-lg rounded-lg"
      >
        <button
          className="mb-4 bg-red-500 px-3 py-1 rounded cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>


        <img
         src={logo}
         alt="SunoZara Logo"
          className="w-40 h-6"
         />

        <ul className="space-y-10 ">
          <li className="mt-8 flex items-center gap-2 hover:text-yellow-400 cursor-pointer"> 
          <a href={`${window.location.origin}`} className="flex items-center gap-2">
            <img src={home} alt="Home" className="h-4 w-4 "/> Home
            </a>
            </li>
          <li className="hover:text-yellow-400 cursor-pointer">🔥 Top Charts</li>
          <li className="hover:text-yellow-400 cursor-pointer">🆕 New Releases</li>
          <li className="hover:text-yellow-400 cursor-pointer">🎧 My Playlist</li>
        </ul>
      </motion.div>
    </div>
  );
}
