import { useState } from 'react';
import * as playerService from '../../utilities/players-service';

export default function PlayerLoginForm({ setPlayer }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      const player = await playerService.login(credentials);
      setPlayer(player);
    } catch(err){
      console.log(err)
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
      <div className='auth-form'>
        <div className="auth-form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </>


  );
}