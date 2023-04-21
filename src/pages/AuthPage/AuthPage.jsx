import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import UserLoginForm from '../../components/UserLoginForm/UserLoginForm';
import PlayerLoginForm from '../../components/PlayerLoginForm/PlayerLoginForm';

export default function AuthPage({ setUser, setPlayer }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <>
            <UserLoginForm setUser={setUser} />
            <h2>Player Login</h2>
            <PlayerLoginForm setPlayer={setPlayer} />
          </>

      }
    </main>
  );
}