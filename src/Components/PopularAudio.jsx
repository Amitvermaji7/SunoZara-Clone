import React from "react";

const PopularAudio = () => {
  return (
    <div className="bg-[#080B12] py-12">
      {/* Heading */}
      <h2 className="text-3xl text-white font-bold mb-6 pl-4">
        Popular Audio Podcast
      </h2>

      {/* Carousel Section */}
      <div className="relative w-full flex gap-4 py-6 overflow-x-auto scrollbar-hide">
        <img
          className="h-48 aspect-video rounded-md object-cover object-center bg-gray-800 hover:opacity-75 transition duration-300"
          src="https://source.unsplash.com/random/241x361/?1"
          alt="Image 1"
        />
        <img
          className="h-48 aspect-video rounded-md object-cover object-center bg-gray-800 hover:opacity-75 transition duration-300"
          src="https://source.unsplash.com/random/241x361/?2"
          alt="Image 2"
        />
        <img
          className="h-48 aspect-video rounded-md object-cover object-center bg-gray-800 hover:opacity-75 transition duration-300"
          src="https://source.unsplash.com/random/241x361/?3"
          alt="Image 3"
        />
        <img
          className="h-48 aspect-video rounded-md object-cover object-center bg-gray-800 hover:opacity-75 transition duration-300"
          src="https://source.unsplash.com/random/241x361/?4"
          alt="Image 4"
        />
        <img
          className="h-48 aspect-video rounded-md object-cover object-center bg-gray-800 hover:opacity-75 transition duration-300"
          src="https://source.unsplash.com/random/241x361/?5"
          alt="Image 5"
        />
      </div>
    </div>
  );
};

export default PopularAudio;
