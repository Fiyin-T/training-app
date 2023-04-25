import './PlayerProfile.css'

export default function PlayerProfile( { playerProfile }) {

    return (
        <main className='PlayerProfile'>
            <div className='card'>
                <div className='card-content'>
                    <h5 className="teal-text">{playerProfile.name}'s Profile</h5>
                    <p>Name: {playerProfile.name} </p>
                    <p>Email: {playerProfile.email} </p>
                    <p>Age: {playerProfile.age} </p>
                    <p>Position: {playerProfile.position} </p>
                    <p>Height: {playerProfile.height} </p>
                    <p>Preferred Foot: {playerProfile.preferredFoot} </p>
                </div>
            </div>
        </main>
    )
}