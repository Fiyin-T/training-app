import { Component } from 'react';
import { signUp } from '../../utilities/players-service';

export default class PlayerForm extends Component {
  state = {
    name: '',
    email: '',
    age: '',
    position: '',
    height: '',
    preferredFoot: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const player = await signUp(formData);
      // Update player state with player
      this.props.setPlayer(player);
    } catch {
      // Invalid signup
      this.setState({
        error: 'Player Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Age</label>
            <input type="number" name="age" value={this.state.role} onChange={this.handleChange} required />
            <label>Position</label>
            <input type="text" name="position" value={this.state.position} onChange={this.handleChange} required />
            <label>Height</label>
            <input type="number" name="height" value={this.state.height} onChange={this.handleChange} required />
            <label>Preferred Foot</label>
            <input type="text" name="preferredFoot" value={this.state.preferredFoot} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>ADD PLAYER</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}