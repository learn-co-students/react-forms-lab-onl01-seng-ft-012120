import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //Make sure fields aren't empty, then call this.props.handleLogin()
    if (this.state.username.length > 0 && this.state.password.length > 0){
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input 
              onChange={event => this.handleChange(event)} 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              onChange={event => this.handleChange(event)} 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.pasword} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
