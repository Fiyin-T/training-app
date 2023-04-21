import './PlayerDetail.css';

export default function PlayerDetail({ player }) {
  return (

    <div >
      Loggedin Player Details
      <div>Name: {player.name}</div>
      <div>Email: {player.email}</div>
      <div>Role: {player.position}</div>
    </div>
  );
}