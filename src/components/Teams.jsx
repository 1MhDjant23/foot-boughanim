import React, { useState } from 'react';
import './Teams.css';

const teams = [
  { name: 'أولامپيك بوغانيم', city: 'دوار بوغانيم',
    players: {
  starting: [
    { name: 'ياسين الزاكي', position: 'GK' },
    { name: 'عبد الله أوليلو', position: 'DEF' },
    { name: 'العربي السعيدي', position: 'DEF' },
    { name: 'عبد اللطيف الوادي', position: 'MID' },
    { name: 'محمد ايت مبارك', position: 'MID' },
    { name: 'أشرف مسلم', position: 'DEF' },
    { name: 'سعيد أوبنعمر', position: 'ATT' }
  ],
  substitutes: [
    { name: 'اسماعيل ايت لحاج' },
    { name: 'رضوان ايت لحاج' },
    { name: 'عبد اللطيف القاضي' },
    { name: 'حسين ابرزا' },
    { name: 'ايوب بيكوجان' },
    { name: 'حمزة إسمكات' },
    { name: 'مصعب أودمزة' }
  ]
}
  },
  { name: 'إفسي بوغانيم', city: 'دوار بوغانيم' ,
    players: {
  starting: [
    { name: 'انور بن الهيان', position: 'ATT' },
    { name: 'إسماعيل ازرميم', position: 'DEF' },
    { name: 'حسين اوبيه', position: 'DEF' },
    { name: 'عمر اوبيه', position: 'GK' },
    { name: 'اسماعيل السعدوني', position: 'MID' },
    { name: 'إبراهيم ايت القاضي', position: 'MID' },
    { name: 'عبد السلام بنسي', position: 'DEF' }
  ],
  substitutes: [
    { name: 'ياسر الكريضة' },
    { name: 'المحجوب بومليك' },
    { name: 'ياسين اكنوش' },
    { name: 'اوتكماط عبد الكريم'},
    { name: 'خالد اوخليص' },
    { name: 'عبد اللطيف أبضان' },
    { name: 'عبد السلام بوغانيم' }
  ]
}
  },
  { name: 'إتحاد بوغانيم', city: 'دوار بوغانيم' ,
    players: {
  starting: [
    { name: 'خالد سي امغار', position: 'GK' },
    { name: 'بالمعلم محمد', position: 'DEF' },
    { name: 'سعيو ياسين', position: 'DEF' },
    { name: 'صالح ابيه', position: 'MID' },
    { name: 'عبد اللطيف سروي', position: 'MID' },
    { name: 'ياسين وحمان', position: 'ATT' },
    { name: 'عبد المجيد ايت صالح', position: 'DEF' }
  ],
  substitutes: [
    { name: 'يونس شهبي' },
    { name: 'نور الدين سي امغار' },
    { name: 'موسى سي امغار' },
    { name: 'بوغنيم مصطفى' },
    // { name: 'Sub 5' }
  ]
} 
  },
  { name: 'أولامپيك أومسدكت', city: 'دوار أومسدكت', 
    players: {
  starting: [
    { name: 'بوفوس عبد الرحمان', position: 'GK' },
    { name: ' ساطيح عبد الرحمان', position: 'DEF' },
    { name: 'امزيل ابراهيم', position: 'DEF' },
    { name: 'سعيد افقيرن', position: 'MID' },
    { name: 'تزي عبد الرحيم', position: 'MID' },
    { name: 'نوردين منير', position: 'DEF' },
    { name: 'اشراف امزيل', position: 'ATT' }
  ],
  substitutes: [
    { name: 'بوكرو عبد الكريم' },
    { name: 'مرير ياسين' },
    { name: 'ادير عمر' },
    { name: 'ادير محمد' },
    { name: 'باقي خسني' },
    { name: 'تزي هشام' }
  ]
}
  }, 
  { name: 'رجاء اولاد علي', city: 'دوار اولاد علي', 
    players: {
  starting: [
    { name: 'حميد أهراي', position: 'GK' },
    { name: 'علي نايت مهدي', position: 'DEF' },
    { name: 'أيوب الطاهيري', position: 'DEF' },
    { name: 'عبد الهادي سعدان', position: 'MID' },
    { name: 'عبد الواحد أحدي', position: 'MID' },
    { name: 'سعيد الرقيتي', position: 'ATT' },
    { name: 'ياسين المهاني', position: 'DEF' }
  ],
  substitutes: [
    { name: 'عمر ايت شلح' },
    { name: 'طارق اوبلال' },
    { name: 'محمد الغجاج ' },
    { name: 'ابراهيم كحيم ' },
    { name: 'كمال احميمي' }
  ]
}
  }, 
  { name: 'أتليتيكو بوغانيم', city: 'دوار بوغانيم', 
    players: {
  starting: [
    { name: 'محمد شاعلي', position: 'GK' },
    { name: 'عبد الكبير أيت الطالب', position: 'DEF' },
    { name: 'حسن أيت الطالب', position: 'DEF' },
    { name: 'ياسين أيت الطالب', position: 'MID' },
    { name: ' عبد الكريم السعيدي', position: 'MID' },
    { name: 'خالد السعيدي', position: 'DEF' },
    { name: 'عصام السعيدي', position: 'ATT' }
  ],
  substitutes: [
    { name: 'ناصر سي امغار' },
    { name: 'علي أيت الطالب' },
    { name: 'مصطفى أكنوش' }
    // { name: 'Sub 4' },
    // { name: 'Sub 5' }
  ]
}
  },
  { name: 'حسنية الحجاج', city: 'دوار الحجاج', 
    players: {
  starting: [
    { name: 'وليد مغيت', position: 'GK' },
    { name: 'زكرياء الصغير', position: 'DEF' },
    { name: 'عبدالرحيم الصغير', position: 'DEF' },
    { name: 'المهدي احميدان', position: 'MID' },
    { name: 'محمد سوريح', position: 'MID' },
    { name: 'عبدالرحيم بنيدو', position: 'ATT' },
    { name: 'احمد اوبلال', position: 'DEF' }
  ],
  substitutes: [
    { name: 'رشيد لميلودي' },
    { name: 'عبدالكريم بنشيخ' },
    { name: 'عبدالصمد العاميري' },
    { name: 'جواد الصافي' },
    { name: ' ايوب احميدان' }
  ]
} 
  },
  { name: 'أيت بوتيلي', city: 'دوار أيت بوتيلي', 
    players: {
    starting: [
      { name: 'علي اكتير', position: 'GK' },
      { name: 'صلاح الركيتي', position: 'DEF' },
      { name: 'لحسن بوفضيل', position: 'DEF' },
      { name: 'يوسف العابيدي', position: 'DEF' },
      { name: 'زكرياء اكثير', position: 'MID' },
      { name: 'البياضي عبد الرحيم', position: 'MID' },
      { name: 'الوهلولي محمد ', position: 'ATT' }
    ],
    substitutes: [
      { name: ' الوهلولي المهدي' },
      { name: 'حسن الجبلي' },
      { name: 'السويدي محمد' },
      { name: 'محمد خالص' },
      { name: 'السويدي زكرياء' },
      { name: 'عماد الركيتي' }
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
    <section className="teams" id="teams">
      <h2>الفرق المشاركة</h2>
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
