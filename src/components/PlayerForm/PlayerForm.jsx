import { useState, useEffect } from 'react';
import { addPlayer } from '../../utilities/users-service';
import M from "materialize-css"

export default function PlayerForm() {

  const [formData, setFormData ] = useState({

    name: '',
    email: '',
    age: '',
    position: '',
    height: '',
    preferredFoot: '',
    password: '',
    confirm: '',

  })

  useEffect (() => {
    M.AutoInit();
  }, [])

  const [error, setError] = useState('');

  const [player, setPlayer] = useState([])

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const player = await addPlayer(formData);
      setPlayer(player)
      setFormData(formData)
      console.log(formData)
    } catch(err){
      console.log(err)
      setError('Player creation failed - Try Again');
    }
  }
  console.log(player)

  function handleChange(evt){
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setError('');
  }

    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />             
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            <label>Position:
              <select name="position" value={formData.position} onChange={handleChange} required  >
                <option value="">Select Position</option>
                  <option value="Goal Keeper">Goal Keeper</option>
                  <option value="Defender">Defender</option>
                  <option value="Mid-Fielder">Mid-Fielder</option>
                  <option value="Forward">Forward</option>
              </select>
            </label><br />
            <label>Height</label>
            <input type="number" name="height" value={formData.height} onChange={handleChange} required /><br />
            <label>Prefered Foot:  
              <select name="preferredFoot" onChange={handleChange} required >
                  <option value="">Select Preferred Foot</option>
                  <option value="Left">Left</option>
                  <option value="Right">Right</option>
              </select>
            </label>< br/>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            <label>Confirm:</label>
            <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />            
            <button type="submit">ADD PLAYER</button>
         </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    );
}