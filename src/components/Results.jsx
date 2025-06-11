import React, { useEffect, useState } from 'react';
import './Results.css';

function Results() {
  const [results, setRusts] = useState([]);
  useEffect(() => {
    fetch('/data/results.json')
      .then((res) => res.json())
      .then((data) => setRusts(data))
      .catch((err) => console.error('Error fetching results:', err));
  }, []);
  return (
    <section className="results" id="results">
      <h2>نتائج مباريات اليوم</h2>
      <div className="results-table">
        <h3> (جارية الآن) </h3>
        {results.map((result, index) => (
          <div className="result-row" key={index}>
            <span className="team-result">{result.teamA}</span>
            <span className="score">{result.score}</span>
            <span className="team-result">{result.teamB}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Results;
