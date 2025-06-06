import React, { useState } from 'react';
import './VideoEvent.css';

function VideoEvent() {
  const videos = [
    { id: 'po5fQu2WFJE', title: 'ذكريات افضل دوري في منطقة بوغانيم' },
    { id: '_d4toIH3kCc', title: 'أجواء قرعة دوري بوغانيم' },
    { id: 'GY_8ZlA0D0Q', title: '...' }
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
          <iframe
            key={currentIndex}
            className="event-video"
            src={`https://www.youtube.com/embed/${videos[currentIndex].id}?autoplay=1&showinfo=0&rel=0&modestbranding=1&controls=0`}
            title={videos[currentIndex].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
