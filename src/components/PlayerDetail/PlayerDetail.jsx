import './PlayerDetail.css';

export default function PlayerDetail({ player }) {
  return (

    <div className='card'>
      <div className='card-content'>
        Loggedin Player Details
        <p>Name: {player.name}</p>
        <p>Email: {player.email}</p>
        <p>Role: {player.position}</p>
      </div>
    </div>
  );
}