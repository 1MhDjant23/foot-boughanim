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
      <h2>Match Schedule</h2>
      <div className="schedule-table">
        {matches.map((match, index) => (
          <div className="match-row" key={index}>
            <span>{match.date}</span>
            <span className="team-name">{match.teamA} <span className="vs-tag">vs</span> {match.teamB}</span>
            <span>{match.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Schedule;
