// src/components/FinalMatchAd.jsx
import React, { useEffect, useState } from 'react';
import './FinalMatchAd.css';

const images = [
  '/ads/pic1.jpg',
  '/ads/pic2.jpg',
  '/ads/pic3.jpeg',
  '/ads/pic4.jpeg',
  '/ads/pic5.jpeg',
  '/ads/pic6.jpeg',
  // '/ads/pic7.jpeg',
  // '/ads/pic8.jpeg',
  '/ads/pic9.jpeg',
  // '/ads/pic10.jpeg',
  '/ads/pic11.jpeg',
  '/ads/pic12.jpeg',
  '/ads/pic13.jpeg',
  '/ads/pic14.jpeg'
];

const FinalMatchAd = () => {
    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      const slide = setInterval(() => {
        setCurrent(prev => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(slide);
    }, []);
  
    return (
      <section className="final-match-ad">
        /*<h2>🔥 الحدث المنتظر 🔥</h2>
        <div className="match-info-banner">
          <img src="/ads/pic6.jpeg" alt="Match Details" />
        </div>
        <h2>🏆 أبرز أحداث المبارة السابقة لاساطير بوغانيم</h2>*/
  
        <div className="slideshow-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`slide ${index === current ? 'active' : ''}`}
            />
          ))}
        </div>
  
      </section>
    );
  };

export default FinalMatchAd;
