import './UserDetail.css';

export default function UserDetail({ user }) {
  return (

    <div className='card'>
      <div className='card-content'>
        Loggedin User Details
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
}