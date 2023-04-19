import './UserDetail.css';

export default function UserDetail({ user }) {
  return (

    <div >
      Loggedin User Details
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Role: {user.role}</div>
    </div>
  );
}