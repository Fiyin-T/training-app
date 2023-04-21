import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as playerService from '../../utilities/players-service'

export default function NavBar({ user, setUser, player, setPlayer }) {

  function handleLogOut() {
    if (user) {
      // Remove token using the user service
      userService.logOut();
      // Update user state in App
      setUser(null);
    }else {
      // Remove token using the user service
      playerService.logOut();
      // Update user state in App
      setPlayer(null);
    }

  }

  return (
    <nav>
      <Link to="#">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/team">Team</Link>
      &nbsp; | &nbsp;
      <Link to="/profile">Profiles</Link>
      &nbsp; | &nbsp;
      { user ?
        <>
          <span>Welcome, {user.name}</span>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </>
        :
        <>
            <span>Welcome, {player.name}</span>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>  
        </>
      }
    </nav>
  );
}