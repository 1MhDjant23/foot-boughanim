import React, { useEffect, useState } from 'react';
import './LeagueTable.css';

function LeagueTable() {
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);
  const [showGroupAResults, setShowGroupAResults] = useState(false);
  const [showGroupBResults, setShowGroupBResults] = useState(false);

  useEffect(() => {
    fetch('/data/teams.json')
      .then((res) => res.json())
      .then((data) => {
        setGroupA(data.groupA || []);
        setGroupB(data.groupB || []);
      })
      .catch((err) => console.error('Error fetching teams:', err));
  }, []);

  const renderTable = (group) => (
    <table className="league-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          <th>Played</th>
          <th>Goal difference</th>
          <th>Points</th>
          <th>Form</th>
        </tr>
      </thead>
      <tbody>
        {group.map((team, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td className="team-info">
              <img src={team.logo} alt={team.name} className="team-logo" />
              {team.name}
            </td>
            <td>{team.played}</td>
            <td>{team.gd}</td>
            <td className="bold">{team.points}</td>
            <td className="form">
              {team.form.map((result, i) => (
                <span key={i} className={`result ${result.toLowerCase()}`}>
                  {result}
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  const [groupAResults] = useState([
   'حسنية الحجاج 0 - 1  اولمبيك بوغانيم',
   'افسي بوغانيم 2 - 0 اتليتيكو بوغانيم',
    'حسنية الحجاج 1 - 0  افسي بوغانيم',
   'اتليتيكو بوغانيم 1 - 4 اولمبيك بوغانيم',
   'حسنية الحجاج 7 - 1  اتليتيكو بوغانيم',
   'اولمبيك بوغانيم 1 - 1  افسي بوغانيم'
    
  ]);
  const [groupBResults] = useState([
    'امجاد ايت بوتيلي  1 - 0 اولمبيك اومسدكت',
    'اتحاد بوغانيم 0 - 0 رجاء اولاد علي',
    'اتحاد بوغانيم 0 - 1 امجاد ايت بوتيلي',
    'رجاء اولاد علي 1 - 0 اولمبيك اومسدكت',
    'رجاء اولاد علي 2 - 2 امجاد ايت بوتيلي',
    'اولمبيك اومسدكت 1 - 1 اتحاد بوغانيم'

  ]);

  const renderLastMatches = (groupName, results) => (
    <div className="last-matches">
      <p><strong>: {groupName} - آخر مباريات </strong></p>
      <div className="divider"></div>
      <ul>
        {results.map((match, index) => (
          <li key={index}>{match}</li>  
        ))}
      </ul>
    </div>
  );

  return (
    <section className="league-table-section" id="table">
      <h2>جدول الترتيب</h2>
      <div className="table-group">
        <div>
          <div className="group-header">
            <h3>Group A</h3>
            <button onClick={() => setShowGroupAResults(!showGroupAResults)}>
              {showGroupAResults ? 'Hide Results' : 'Show All Results'}
            </button>
          </div>
          {showGroupAResults && renderLastMatches('Group A', groupAResults)}
          {renderTable(groupA)}
        </div>

        <div>
          <div className="group-header">
            <h3>Group B</h3>
            <button onClick={() => setShowGroupBResults(!showGroupBResults)}>
              {showGroupBResults ? 'Hide Results' : 'Show All Results'}
            </button>
          </div>
          {showGroupBResults && renderLastMatches('Group B', groupBResults)}
          {renderTable(groupB)}
        </div>
      </div>
    </section>
  );
}

export default LeagueTable;

