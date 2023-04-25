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
import TrainingForm from '../../components/TrainingForm/TrainingForm'
import TrainingDetails from '../../components/TrainingDetails/TrainingDetails'


export default function TeamOverviewPage() {

  const [user, setUser] = useState(getUser());

  const [player, setPlayer] = useState(getPlayer())
  
  const [teamPlayers, setTeamPlayers] = useState([])

  const [ playerProfile, setPlayerProfile] = useState([])

  const [ playerTrainings, setPlayerTrainings] = useState([])

  useEffect(function() {
    async function getPlayers() {
      const teamPlayers = await teamAPI.getTeam();
      setTeamPlayers(teamPlayers);
    }
    getPlayers();

  },[teamPlayers]);

    // Event handlers
    async function handlePlayerDelete(playerId) {
      const deletePlayer = await playerAPI.deletePlayer(playerId)
      setPlayer(deletePlayer)
    }

    async function handlePlayerProfile(playerId) {
      const playerProfile = await playerAPI.getPlayerProfile(playerId)
      setPlayerProfile(playerProfile)
      console.log(playerProfile)
      handlePlayerTraining(playerId)
    }

    async function handlePlayerTraining(playerId){
      const playerTrainings = await playerAPI.getPlayerTrainings(playerId)
      setPlayerTrainings(playerTrainings)
      console.log(playerTrainings)
    }


  return (
    <main className='container'>
      <h5>Team Overview Page</h5>
      <div className='TeamOverviewPage'>
          <div>
            <TeamList user={user} setUser={setUser} 
              player={player} setPlayer={setPlayer} 
              teamPlayers={teamPlayers} setTeamPlayers={setTeamPlayers} 
              handlePlayerDelete={handlePlayerDelete} playerProfile={playerProfile} 
              handlePlayerProfile={handlePlayerProfile} 
            />
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
      { playerProfile.length === 0 ?
        <p></p>
        :
        <div className='PlayerDetails'>
          <PlayerProfile playerProfile={playerProfile} setPlayerProfile={setPlayerProfile} 
            handlePlayerProfile={handlePlayerProfile} 
          />
          <TrainingDetails playerTrainings={playerTrainings} playerProfile={playerProfile} />
          <TrainingForm playerProfile={playerProfile} />   
        </div>
      }
    </main>

  );
}