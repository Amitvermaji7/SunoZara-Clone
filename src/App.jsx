import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import PopularAudio from "./Components/PopularAudio";
import Footer from "./Components/Footer";
import TraditionalDress from "./Components/TraditionalDress";
import LocalTourism from "./Components/LocalTourism";
import PodcastPage from "./Components/AudioPodcast/PodcastPage"; // Naya Page

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <PopularAudio />
              <TraditionalDress />
              <LocalTourism />
              <Footer />
            </>
          }
        />

        {/* Podcast Page (Sirf Hello dikhana hai) */}
        <Route path="/podcast" element={<PodcastPage />} />
      </Routes>
    </Router>
  );
}

export default App;
