import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import UserLoginForm from '../../components/UserLoginForm/UserLoginForm';
import PlayerLoginForm from '../../components/PlayerLoginForm/PlayerLoginForm';
import './AuthPage.css'

export default function AuthPage({ setUser, setPlayer }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h4>AuthPage</h4>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <>
            <UserLoginForm setUser={setUser} />
            <h4>Player Login</h4>
            <PlayerLoginForm setPlayer={setPlayer} />
          </>

      }
    </main>
  );
}