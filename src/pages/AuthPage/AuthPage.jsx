import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import UserLoginForm from '../../components/UserLoginForm/UserLoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <UserLoginForm setUser={setUser} />
      }
    </main>
  );
}