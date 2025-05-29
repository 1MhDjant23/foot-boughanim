import React from 'react';
import './Teams.css'

const teams = [
  { name: 'Red Warriors', city: 'Springfield' },
  { name: 'Blue Hawks', city: 'Riverside' },
  { name: 'Geen Titans', city: 'Hill Valley' },
  { name: 'Golden Eagles', city: 'boughanim' },
  { name: 'Boughanim Eagles', city: 'assadss' },
  { name: 'Tourght Eagles', city: 'tourght' },
];

function Teams() {
  return (
    <section>
      <h2>Participating Teams</h2>
      <div className="team-list">
        {teams.map((team, index) => ( 
          <div className="team-card" key={index}>
            <h3>{team.name}</h3>
            <p>{team.city}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Teams;
