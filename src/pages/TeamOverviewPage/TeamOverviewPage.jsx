import UserDetail from '../../components/UserDetail/UserDetail'
import TeamList from '../../components/TeamList/TeamList'
import PlayerForm from '../../components/PlayerForm/PlayerForm'
import { getUser } from '../../utilities/users-service'
import { useState, useEffect } from 'react'
import './TeamOverviewPage.css'
// import { getPlayer } from '../../utilities/players-service'
import * as teamAPI from '../../utilities/team-api'


export default function TeamOverviewPage() {

  const [user, setUser] = useState(getUser());
  
  const [teamPlayers, setTeamPlayers] = useState([])

  useEffect(function() {
    async function getPlayers() {
      const teamPlayers = await teamAPI.getTeam();
      setTeamPlayers(teamPlayers);
    }
    getPlayers();
  },[]);



  return (
    <main className='TeamOverviewPage'>
      {/* <aside>
       
      </aside> */}
      <div>
        <h4>Team Overview Page</h4>
        <TeamList teamPlayers={teamPlayers} setTeamPlayers={setTeamPlayers}/>
      </div>
      <div> 
        <UserDetail user={user} setUser={setUser}/>
        <PlayerForm />
      </div>
      
    </main>



  );
}