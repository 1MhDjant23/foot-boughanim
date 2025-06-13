import React from 'react';
import './finalMatchSection.css'; 

function FinalMatchSection() {
  return (
    <section className="final-match-section">
      <h2 className="final-match-title">Final Match</h2>
      <p className="final-match-description">
        Join us for the thrilling final match of دوري بوغانيم لكورة القدم في نسخته ال21!
      </p>
      <div className="final-match-details">
        <p><strong>Date:</strong> June 13, 2025</p>
        <p><strong>Time:</strong> 7:30 PM</p>
        <p><strong>Location:</strong>ملعب الهيان</p>
      </div>
    </section>
  );
}

export default FinalMatchSection;