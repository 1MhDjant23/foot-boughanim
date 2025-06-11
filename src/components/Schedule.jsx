import React, { useEffect, useState } from 'react';
import './Schedule.css';

function Schedule() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch('/data/shedule.json')
    .then((res) => res.json())
    .then((data) => setMatches(data))
    .catch((err) => console.error('Error fetching matches:', err));
  }, []);
  return (
    <section className="schedule" id="schedule">
      <h2>المباريات القادمة</h2>
      <h3>(مباريات نصف النهائي)</h3>
      <div className="schedule-table">
        {matches.map((match, index) => (
          <div className="match-row" key={index}>
            <span className="date-time">{match.date}</span>
            <span className="team-name">{match.teamA} <span className="vs-tag">vs</span> {match.teamB}</span>
            <span className="date-time">{match.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Schedule;
