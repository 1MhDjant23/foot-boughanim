import React from 'react';
import './winnerSection.css'; 
function WinnerSection() {
  return (
    <section className="winner-section">
      <div className="winner-content">
        <h2 className="winner-title">🎉تهانينا للفريق الفائز في هذه النسخة المميزة، النسخة 21🎉</h2>
        <p className="winner-description">
            في هذه النسخة، شهدنا منافسة قوية بين الفرق
            <br />
            <strong> فريق اولمبيك بوغانيم </strong> كان له أداء رائع في البطولة

            <br />
            حيث قدموا مباريات مثيرة وأظهروا مهارات استثنائية في كرة القدم.
            <br />
            <br />
            <strong>اولمبيك بوغانيم</strong> هو الفريق الذي أظهر روح الفريق والتعاون
            <br />
            <strong>اولمبيك بوغانيم</strong> لعبوا بروح رياضية عالية
            <br />
            <strong>اولمبيك بوغانيم</strong> أظهروا مهارات فردية وجماعية رائعة
            <br />
            <strong>اولمبيك بوغانيم</strong> كانوا دائمًا في القمة
            <br />
        </p>
        <img 
          src="/olampique.jpeg" 
          alt="Winning Team" 
          className="winner-image" 
        />
      </div>
    </section>
  );
}

export default WinnerSection;