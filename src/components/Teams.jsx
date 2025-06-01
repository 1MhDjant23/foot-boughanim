import React, { useState } from 'react';
import './Teams.css';

const teams = [
  { name: 'أولامپيك بوغانيم', city: 'دوار أيت بوتيلي',
    players: {
  starting: [
    { name: 'عيسى أكنوش', position: 'GK' },
    { name: 'حسن أكنوش', position: 'DEF' },
    { name: 'عزيز أكنوش', position: 'DEF' },
    { name: 'سعيد أيت طالب', position: 'MID' },
    { name: 'أحمد أزرميم', position: 'MID' },
    { name: 'الحسين أبرزا', position: 'DEF' },
    { name: 'رشيد زروب', position: 'ATT' }
  ],
  substitutes: [
    { name: 'عبد الله بلاوعلي ' },
    { name: 'أمين ناجي' },
    { name: 'عبد اللطيف القاضي' },
    { name: 'خالد أوخليص' },
    { name: 'مجيد أيت مهدي' }
  ]
}
  },
  { name: 'إفسي بوغانيم', city: 'دوار بوغانيم' ,
    players: {
  starting: [
    { name: 'Player 1', position: 'GK' },
    { name: 'Player 2', position: 'DEF' },
    { name: 'Player 3', position: 'DEF' },
    { name: 'Player 4', position: 'MID' },
    { name: 'Player 5', position: 'MID' },
    { name: 'Player 6', position: 'DEF' },
    { name: 'Player 7', position: 'ATT' }
  ],
  substitutes: [
    { name: 'Sub 1' },
    { name: 'Sub 2' },
    { name: 'Sub 3' },
    { name: 'Sub 4' },
    { name: 'Sub 5' }
  ]
}
  },
  { name: 'إتحاد بوغانيم', city: 'دوار بوغانيم' ,
    players: {
  starting: [
    { name: 'Player 1', position: 'GK' },
    { name: 'Player 2', position: 'DEF' },
    { name: 'Player 3', position: 'DEF' },
    { name: 'Player 4', position: 'MID' },
    { name: 'Player 5', position: 'MID' },
    { name: 'Player 6', position: 'ATT' },
    { name: 'Player 7', position: 'DEF' }
  ],
  substitutes: [
    { name: 'Sub 1' },
    { name: 'Sub 2' },
    { name: 'Sub 3' },
    { name: 'Sub 4' },
    { name: 'Sub 5' }
  ]
} 
  },
  { name: 'أولامپيك أومسدكت', city: 'دوار أومسدكت', 
    players: {
  starting: [
    { name: 'Player 1', position: 'GK' },
    { name: 'Player 2', position: 'DEF' },
    { name: 'Player 3', position: 'DEF' },
    { name: 'Player 4', position: 'MID' },
    { name: 'Player 5', position: 'MID' },
    { name: 'Player 6', position: 'DEF' },
    { name: 'Player 7', position: 'ATT' }
  ],
  substitutes: [
    { name: 'Sub 1' },
    { name: 'Sub 2' },
    { name: 'Sub 3' },
    { name: 'Sub 4' },
    { name: 'Sub 5' }
  ]
}
  }, 
  { name: 'رجاء اولاد علي', city: 'دوار اولاد علي', 
    players: {
  starting: [
    { name: 'Player 1', position: 'GK' },
    { name: 'Player 2', position: 'DEF' },
    { name: 'Player 3', position: 'DEF' },
    { name: 'Player 4', position: 'MID' },
    { name: 'Player 5', position: 'MID' },
    { name: 'Player 6', position: 'ATT' },
    { name: 'Player 7', position: 'DEF' }
  ],
  substitutes: [
    { name: 'Sub 1' },
    { name: 'Sub 2' },
    { name: 'Sub 3' },
    { name: 'Sub 4' },
    { name: 'Sub 5' }
  ]
}
  }, 
  { name: 'أتليتيكو بوغانيم', city: 'دوار بوغانيم', 
    players: {
  starting: [
    { name: 'Player 1', position: 'GK' },
    { name: 'Player 2', position: 'DEF' },
    { name: 'Player 3', position: 'DEF' },
    { name: 'Player 4', position: 'MID' },
    { name: 'Player 5', position: 'MID' },
    { name: 'Player 6', position: 'DEF' },
    { name: 'Player 7', position: 'ATT' }
  ],
  substitutes: [
    { name: 'Sub 1' },
    { name: 'Sub 2' },
    { name: 'Sub 3' },
    { name: 'Sub 4' },
    { name: 'Sub 5' }
  ]
}
  },
  { name: 'حسنية الحجاج', city: 'دوار الحجاج', 
    players: {
  starting: [
    { name: 'Player 1', position: 'GK' },
    { name: 'Player 2', position: 'DEF' },
    { name: 'Player 3', position: 'DEF' },
    { name: 'Player 4', position: 'MID' },
    { name: 'Player 5', position: 'MID' },
    { name: 'Player 6', position: 'ATT' },
    { name: 'Player 7', position: 'DEF' }
  ],
  substitutes: [
    { name: 'Sub 1' },
    { name: 'Sub 2' },
    { name: 'Sub 3' },
    { name: 'Sub 4' },
    { name: 'Sub 5' }
  ]
} 
  },
  { name: 'أيت بوتيلي', city: 'دوار بوغانيم', 
    players: {
    starting: [
      { name: 'Player 1', position: 'GK' },
      { name: 'Player 2', position: 'DEF' },
      { name: 'Player 3', position: 'DEF' },
      { name: 'Player 4', position: 'DEF' },
      { name: 'Player 5', position: 'MID' },
      { name: 'Player 6', position: 'MID' },
      { name: 'Player 7', position: 'ATT' }
    ],
    substitutes: [
      { name: 'Sub 1' },
      { name: 'Sub 2' },
      { name: 'Sub 3' },
      { name: 'Sub 4' },
      { name: 'Sub 5' }
    ]
  } 
  }
];

function Teams() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const openModal = (team) => {
    setSelectedTeam(team);
  };

  const closeModal = () => {
    setSelectedTeam(null);
  };

  return (
    <section className="teams">
      <h2>Participating Teams</h2>
      <div className="team-list">
        {teams.map((team, index) => (
          <div className="team-card" key={index} onClick={() => openModal(team)}>
            <h3>{team.name}</h3>
            <p>{team.city}</p>
          </div>
        ))}
      </div>

      {selectedTeam && ( 
    <div className="modal" onClick={closeModal}>
      {selectedTeam && (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>التشكيلة الرسمية لـ {selectedTeam.name}</h3>

        <div className="formation">
  {['GK', 'DEF', 'MID', 'ATT'].map((pos) => {
    const playersByPosition = selectedTeam.players.starting.filter(p => p.position === pos);
    return (
      <div className={`position ${pos.toLowerCase()}`} key={pos}>
        {playersByPosition.map((player, index) => (
          <div className="player" key={index}>{player.name}</div>
        ))}
      </div>
    );
  })}
</div>


        <h4>البدلاء</h4>
        <div className="substitutes">
          {selectedTeam.players.substitutes.map((sub, idx) => (
            <div key={idx} className="sub">{sub.name}</div>
          ))}
        </div>

        <button onClick={closeModal}>إغلاق</button>
      </div>
    </div>
)}

  </div>
      )}
    </section>
  );
}

export default Teams;
