import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as playerService from '../../utilities/players-service'
import './NavBar.css'

export default function NavBar({ user, setUser, player, setPlayer }) {

  function handleLogOut() {
    if (user) {
      // Remove token using the user service
      userService.logOut();
      // Update user state in App
      setUser(null);
    }else {
      // Remove token using the player service
      playerService.logOut();
      // Update user state in App
      setPlayer(null);
    }

  }

  return (
      <nav>
        <div className="nav-wrapper #878C8F --pale-blue">
          <ul>
            <li><Link to="/" className="left brand-logo"><div><img src="https://i.imgur.com/Li5SY9g.jpg" width="60" height="60" alt=''/></div></Link></li>
          </ul>
          <ul className='right'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Team</Link></li>
            <li><Link to="/team-profile">Profiles</Link></li>
            { user ?
              <>
                <li>Welcome, {user.name}</li>
                <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>
              </>
              :
              <>
                  <li>Welcome, {player.name}</li>
                  <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>  
              </>
            }
          </ul>
        </div>
      </nav>
  );
}