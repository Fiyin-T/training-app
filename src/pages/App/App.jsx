import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { getPlayer } from '../../utilities/players-service';
import AuthPage from '../AuthPage/AuthPage';
import TeamOverviewPage from '../TeamOverviewPage/TeamOverviewPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  const [player, setPlayer] = useState(getPlayer());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<TeamOverviewPage />} />
          </Routes>
        </>
        :
        player ?
        <>
          <NavBar player={player} setPlayer={setPlayer} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<TeamOverviewPage />} />

          </Routes>
        </>
        :
        <AuthPage setUser={setUser} setPlayer={setPlayer}/>
      }
    </main>
  );
}

export default App;
