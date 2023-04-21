import UserDetail from '../../components/UserDetail/UserDetail'
import TeamList from '../../components/TeamList/TeamList'
import PlayerForm from '../../components/PlayerForm/PlayerForm'
import { getUser } from '../../utilities/users-service'
import { useState, useEffect} from 'react'
import './TeamOverviewPage.css'
import { getPlayer } from '../../utilities/players-service'
import * as teamAPI from '../../utilities/team-api'
import * as playerAPI from '../../utilities/players-api'
import PlayerDetail from '../../components/PlayerDetail/PlayerDetail'
import PlayerProfile from '../../components/PlayerProfile/PlayerProfile'


export default function TeamOverviewPage() {

  const [user, setUser] = useState(getUser());

  const [player, setPlayer] = useState(getPlayer())
  
  const [teamPlayers, setTeamPlayers] = useState([])

  const [ playerProfile, setPlayerProfile] = useState([])

  useEffect(function() {
    async function getPlayers() {
      const teamPlayers = await teamAPI.getTeam();
      setTeamPlayers(teamPlayers);
    }
    getPlayers();

  },[]);

    // Event handlers
    async function handlePlayerDelete(playerId) {
      const deletePlayer = await playerAPI.deletePlayer(playerId)
      setPlayer(deletePlayer)
    }

    async function handlePlayerProfile(playerId) {
      const playerProfile = await playerAPI.getPlayerProfile(playerId)
      setPlayerProfile(playerProfile)
    }


  return (
    <main>
      <div className='TeamOverviewPage'>
          <div>
            <h4>Team Overview Page</h4>
            <TeamList teamPlayers={teamPlayers} setTeamPlayers={setTeamPlayers} handlePlayerDelete={handlePlayerDelete} handlePlayerProfile={handlePlayerProfile}/>
          </div>
          <div> 
            { user ?
              <>
                <UserDetail user={user} setUser={setUser}/>
                <PlayerForm />
              </>
              :
              <PlayerDetail player={player} setTeamPlayer={setPlayer}/>
            }
          </div>
      </div>
      <div className='PlayerDetails'>
        <PlayerProfile playerProfile={playerProfile} setPlayerProfile={setPlayerProfile}/>
        {/* <TrainingDetails /> */}
      </div>
    </main>

  );
}