import './TeamTable.css';

export default function TeamTable( { teamPlayer } ) {

  return (
    <div className="TeamTable">
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
        <tbody>
          <tr>
            <td>{teamPlayer.name}</td>
            <td>{teamPlayer.age}</td>
            <td>{teamPlayer.position}</td>
            <td>{teamPlayer.height}</td>
            <td>{teamPlayer.preferredFoot}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}