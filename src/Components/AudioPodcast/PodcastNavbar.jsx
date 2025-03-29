import React from "react";
import AudioSidebar from "../AudioPodcast/AudioSidebar";  

export default function PodcastNavbar() {
  return (
    
   <div className="bg-[#161D2F] py-12 overflow-hidden w-full">
    
    <AudioSidebar/>

   <input className="bg-blue-900 text-white p-4 rounded-lg pr-10px mx-auto ml-60 w-80" type="text" placeholder="search for songs"/>
   </div>
  );
}
