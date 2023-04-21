import './TeamList.css';
import TeamTable from '../TeamTable/TeamTable';

export default function TeamList( { teamPlayers, handlePlayerDelete, handlePlayerProfile }) {
  const players = teamPlayers.map(player =>
    <TeamTable
      key={player._id}
      teamPlayer={player} 
      handlePlayerDelete={handlePlayerDelete}
      handlePlayerProfile={handlePlayerProfile}
    />
  )

  return (
    <main className="TeamList">
        <table>
          <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Position</th>
                <th>Height(cm)</th>
                <th>Preferred Foot</th>
              </tr>
            </thead>
          </table>
        {players}
    </main>
  );
}