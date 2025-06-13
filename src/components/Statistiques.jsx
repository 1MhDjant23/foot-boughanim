import React, { useEffect, useState } from 'react';
import './Statistiques.css';
// import './components/Teams'

function Statistiques() {
    
    const   [playersList, setStats] = useState([]);

    useEffect(() => {
        fetch('/data/players.json')
            .then((res) => res.json())
            .then((data) => setStats(data)
            .catch((err) => console.error('Error fetching data:', err)));
    }, []);
    const   renderTableOfStats = (players) => (
        <table className="stats-table">
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Player Name</th>
                    <th>Num Of Goals</th>
                    <th>Num of Assists</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{player.name}</td>
                        <td>{player.goal}</td>
                        <td>{player.assists}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
    return (
        <section className="stats-section" id="stats">
            <h2>Statistiques Of Players</h2>
            <div className="stats-group">
                {renderTableOfStats(playersList)}
            </div>
        </section>
    );
}

export  default Statistiques;