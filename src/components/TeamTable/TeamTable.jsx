import './TeamTable.css';

export default function TeamTable( { teamPlayer, handlePlayerDelete, handlePlayerProfile } ) {

  const handleClick = () => {
    handlePlayerDelete(teamPlayer._id)
  }

  const handleProfile = () => {
    handlePlayerProfile(teamPlayer._id)
  }

  return (
    <div className="TeamTable">
      <table>
        <tbody>
          <tr>
            <td><button onClick={handleProfile}>{teamPlayer.name}</button></td>
            <td>{teamPlayer.age}</td>
            <td>{teamPlayer.position}</td>
            <td>{teamPlayer.height}</td>
            <td>{teamPlayer.preferredFoot}</td>
            <td><button onClick={handleClick}>❌</button></td>
          </tr>
        </tbody>
      </table> 
    </div>
  );
}