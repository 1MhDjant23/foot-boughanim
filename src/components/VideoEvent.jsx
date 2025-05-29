import React, { useState } from 'react';
import './VideoEvent.css';

function VideoEvent() {
  const videos = [
    { src: '/demo.mp4', title: 'Final Match Highlights' },
    { src: '/logov.mp4', title: 'Top Goals Compilation' },
    { src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Behind the Scenes' }
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

          <video className="event-video" controls  muted>
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



// import React, { useState } from 'react';
// import './VideoEvent.css';

// function VideoEvent() {
//   const videos = [
//     { src: '/video1.mp4', title: 'Final Match Highlights' },
//     { src: '/video2.mp4', title: 'Top Goals Compilation' },
//     { src: '/video3.mp4', title: 'Behind the Scenes' }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleSwitch = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <section className="video-event-section">
//       <div className="video-event-card">
//         <h2>{videos[currentIndex].title}</h2>
//         <video className="event-video" controls>
//           <source src={videos[currentIndex].src} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="video-switch-buttons">
//           {videos.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleSwitch(index)}
//               className={currentIndex === index ? 'active' : ''}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default VideoEvent;
