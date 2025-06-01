import React, { useEffect, useState } from 'react';
import './LeagueTable.css';

function LeagueTable() {
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);

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
          <th>Goal Difference</th>
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

  return (
    <section className="league-table-section">
      <h2>League Phase Table</h2>
      <div className="table-group">
        <div>
          <h3>Group A</h3>
          {renderTable(groupA)}
        </div>
        <div>
          <h3>Group B</h3>
          {renderTable(groupB)}
        </div>
      </div>
    </section>
  );
}

export default LeagueTable;
