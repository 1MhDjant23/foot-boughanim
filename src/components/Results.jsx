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
      <h2>نتائج المباريات</h2>
      <div className="results-table">
      <h3>مبارة النهائي  (جارية الان)</h3>
      <div className="result-row">

           <span className="team-result">اولمبيك بوغانيم</span>
            <span className="score">0 - 0</span>
            <span className="team-result">امجاد ايت بوتيلي</span>
      </div>

  <h3>نتائج مباريات نصف النهائي</h3>
        {results.map((result, index) => (
          <div className="result-row" key={index}>
            <h3>{result.stat}</h3>
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
