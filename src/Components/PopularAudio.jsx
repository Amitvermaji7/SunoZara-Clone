import React from "react";
import SongCard from "./SongCard";

const PopularAudio = () => {
  return (
    <div className="bg-[#080B12] py-12 overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl text-white font-bold mb-6 pl-4">
        Popular Audio Podcast
      </h2>

      {/* Carousel Section */}
      <div className="relative w-full flex gap-22 py-6 overflow-x-auto scrollbar-hide ">
       <SongCard  description='this is the des' title='title 1' src='https://picsum.photos/200/200/?blur=9'/>
       <SongCard  description='description 2' title='title 2'src='https://picsum.photos/seed/picsum/200/200'/>
       <SongCard  description='this is the des' title='title 1' src='https://picsum.photos/seed/picsum/200/200'/>
       <SongCard  description='description 2' title='title 2'src='https://picsum.photos/seed/picsum/200/200'/>
       <SongCard  description='this is the des' title='title 1' src='https://picsum.photos/seed/picsum/200/200'/>
       <SongCard  description='description 2' title='title 2'src='https://picsum.photos/seed/picsum/200/200'/>
       <SongCard  description='this is the des' title='title 1' src='https://picsum.photos/seed/picsum/200/200'/>
      </div>
    </div>
  );
};

export default PopularAudio;
