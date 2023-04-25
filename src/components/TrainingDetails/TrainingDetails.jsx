import './TrainingDetails.css'

export default function TrainingDetails({playerTrainings}) {

    return (
        <main className='TrainingDetails'>
            <h6>Training Details</h6>
            <table className='training-table'>
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Activity</th>
                        <th>Duration[hours]</th>
                    </tr>
                </thead>
                <tbody> 
                    {   playerTrainings.map((trainings) => {
                        return (
                            <tr key={trainings.attribute}>
                                <td>{trainings.attribute}</td>
                                <td>{trainings.activity}</td>
                                <td>{trainings.duration}</td>
                            </tr>
                            )
                        })
                    } 
                </tbody>
            </table>
        </main>


    )

}