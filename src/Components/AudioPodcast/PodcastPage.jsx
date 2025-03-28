import React from "react";
import PodcastNavbar from "./PodcastNavbar"; 
import PodcastHero from "./PodcastHero"; 

export default function PodcastPage() {
  return (
    <>
      <PodcastNavbar /> 
      <PodcastHero />
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white text-3xl">
        Hello, This is the Podcast Page!
      </div>
    </>
  );
}
