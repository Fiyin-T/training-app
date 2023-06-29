import { useState, useEffect} from 'react';
import { addTraining } from '../../utilities/players-service';
import M from "materialize-css"
import './TrainingForm.css'

export default function TrainingForm( {playerProfile }) {

  console.log(playerProfile)
  const [formData, setFormData ] = useState({

    attribute: '',
    activity: '',
    duration: ''

  })

  useEffect (() => {
    M.AutoInit();
  }, [])

  const [error, setError] = useState('');

  const [trainings, setTrainings] = useState([])

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const training = await addTraining(formData, playerProfile._id);
      setTrainings(training)
      setFormData(formData)
      console.log(formData)
      console.log(trainings)
    } catch(err){
      console.log(err)
      setError('Training creation failed - Try Again');
    }
  }

  function handleChange(evt){
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setError('');
  }

    return (
      <div className='TrainingForm'>
        <div className="form-container">
            ADD TRAINING
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Attribute:
              <select name="attribute" value={formData.attribute} onChange={handleChange} >
                  <option value="">Select Attribute</option>
                  <option value="PACE">PACE</option>
                  <option value="SHOT">SHOT</option>
                  <option value="PASS">PASS</option>
                  <option value="DRI">DRI</option>
                  <option value="DEF">DEF</option>
                  <option value="STA">STA</option>
              </select>
            </label>< br/>
            <label>Activity</label>
            <input type="text" name="activity" value={formData.activity} onChange={handleChange} required /> 
            <label>Duration</label>
            <input type="number" name="duration" value={formData.duration} onChange={handleChange} required /> 
            <button type="submit">ADD TRAINING</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    );
}