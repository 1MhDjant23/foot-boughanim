import React from 'react';
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

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <section className="demo-video-section">
        <div className="demo-video-container">
          <h1 className="demo-video-text"> دوري بوغانيم لكورة القدم في نسخته ال21</h1>
          <video className="demo-video"
            loop
            autoPlay
            muted
            >
            <source src="/demo.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <Hero />
      <Schedule />
      <VideoEvent />
      <Teams />
      <Results />
      <LeagueTable />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
