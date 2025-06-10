// import React, { useState } from 'react';
import VideoEvent from './components/VideoEvent'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Teams from './components/Teams'
import Schedule from './components/Schedule' 
import Results from './components/Results'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LeagueTable from './components/LeagueTable';
import FinalMatchAd from './components/FinalMatchAd';
import './App.css'

function App() {
  // const [isMuted, setIsMuted] = useState(true);
  // const toggleMute = () => {
  //   setIsMuted(!isMuted);
  // };
  return (
    <div>
      <Header />
      <section className="demo-video-section">
        <div className="demo-video-container">
          <h1 className="demo-video-text"> دوري بوغانيم لكورة القدم في نسخته ال21</h1>
          <iframe className="demo-video"
            src="https://www.youtube.com/embed/po5fQu2WFJE?autoplay=1&mute=1&loop=1&showinfo=0&rel=0&modestbranding=1&controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay=1;vq=hd1080; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
          {/* <button onClick={toggleMute} className="mute-button">
            {isMuted ? '🔇' : '🔊'}
          </button> */}
        </div>
      </section>
      <Hero />

      <Results />
      <VideoEvent />
      <Schedule />
      <LeagueTable />
      <Teams />
      <FinalMatchAd />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
