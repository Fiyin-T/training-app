import './TeamList.css';
import TeamTable from '../TeamTable/TeamTable';

export default function TeamList( { teamPlayers }) {
  const players = teamPlayers.map(player =>
    <TeamTable
      key={player._id}
      teamPlayer={player} 
    />
  )
  return (
    <main className="TeamList">
          {players}
    </main>
  );
}