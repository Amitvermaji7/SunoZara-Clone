import React from 'react';
import { motion } from 'framer-motion';
import boy from '../assets/boy.png';

const Hero = () => {
  return (
    <section className="bg-[#070A11] text-white flex flex-col text-center py-20 px-4">
      
      {/* 🔹 Search Bar Animation */}
      <motion.input
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        type="text"
        placeholder="Search stories, songs..."
        className="w-80 max-w-lg bg-gray-800 flex items-center rounded-md p-2 text-white mt-6 mx-4 outline-none"
      />

      {/* 🔹 Hero Content Animation */}
      <motion.div
        className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side (Text) */}
        <motion.div
          className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold leading-none sm:text-4xl">
            Bihar's Heritage <br />
            in <span className="text-6xl">Audio</span>
          </h1>
          <p className="mt-6 mb-10 text-lg sm:mb-14">
            Experience the rich cultural heritage of Bihar through
            <br className="hidden md:inline lg:hidden" /> immersive audio stories, folk tales, and literature.
            Listen, learn, and connect with our roots.
          </p>

          {/* 🔹 Animated Buttons */}
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            
            {/* Button Animation */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-8 py-3 text-lg text-black font-semibold bg-yellow-600 rounded-md mx-4"
            >
              Download App
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded text-yellow-500"
            >
              Learn more →
            </motion.a>
          </div>
        </motion.div>

        {/* 🔹 Image Animation */}
        <motion.div
          className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src={boy} alt="Hero Image" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
