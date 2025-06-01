import React, { useState } from 'react';
import './VideoEvent.css';

function VideoEvent() {
  const videos = [
    { src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Behind the Scenes' },
    // { src: '/moments.mp4', title: 'أهم لحظات مراسيم سحب قرعة دوري بوغانيم في نسخته ال21' },
    { src: '/demo.mp4', title: 'Final Match Highlights' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="video-event-section">
      <div className="video-event-card">
        <h2>{videos[currentIndex].title}</h2>

        <div className="video-wrapper">
          <button className="arrow left" onClick={prevVideo}>
            ❮
          </button>

          <video
            key={currentIndex}
             className="event-video" controls  muted autoPlay>
            <source src={videos[currentIndex].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button className="arrow right" onClick={nextVideo}>
            ❯
          </button>
        </div>

        <div className="dots">
          {videos.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoEvent;
