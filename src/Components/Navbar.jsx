import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Import Framer Motion
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0A0A0A] text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center h-20 px-4 lg:px-0">
        
        {/* 🔹 Logo Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-[150px]" />
          </Link>
        </motion.div>

        {/* 🔹 Nav Links for Desktop with Animation */}
        <nav className="hidden lg:flex gap-10 text-lg">
          {["Local Tourism", "About", "Contact Us"].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to="#" className="hover:text-yellow-400 transition-all duration-300">
                {item}
              </Link>
            </motion.div>
          ))}

          {/* 🔹 Audio Podcast Button */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/podcast">
              <button className="border border-gray-400 rounded px-4 py-1 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Audio Podcast
              </button>
            </Link>
          </motion.div>
        </nav>

        {/* 🔹 Desktop Buttons with Hover Animation */}
        <div className="hidden lg:flex gap-4">
          {["Shop", "Log in"].map((btn, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                btn === "Shop"
                  ? "hover:bg-white hover:text-black"
                  : "border border-gray-100 px-4 py-1 rounded hover:bg-white hover:text-black text-gray-100"
              }`}
            >
              {btn}
            </motion.button>
          ))}
        </div>

        {/* 🔹 Hamburger Menu Button */}
        <motion.button 
          className="lg:hidden"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </motion.button>
      </div>

      {/* 🔹 Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-[#0A0A0A] py-4"
          >
            <nav className="flex flex-col gap-4 items-center">
              {["Local Tourism", "About", "Contact Us"].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link to="#" className="hover:text-yellow-400 transition-all duration-300">
                    {item}
                  </Link>
                </motion.div>
              ))}

              {/* 🔹 Audio Podcast Button */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Link to="/podcast">
                  <button className="border border-gray-400 rounded px-4 py-1 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300">
                    Audio Podcast
                  </button>
                </Link>
              </motion.div>

              {/* 🔹 Mobile Buttons with Animation */}
              {["Shop", "Log in"].map((btn, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    btn === "Shop"
                      ? "hover:bg-white hover:text-black"
                      : "border border-gray-100 px-4 py-1 rounded hover:bg-white hover:text-black text-gray-100"
                  }`}
                >
                  {btn}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
