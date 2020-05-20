import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      charsRemaining: 280
    };
  }

  handleChange = (event) => {
    let length = event.target.value.length 
    this.setState({
      [event.target.name]: event.target.value,
      charsRemaining: 280 - length
    })
    
    

  }

  render() {
    return (
      <div>
        <strong>Your message: ({this.state.charsRemaining} characters remaining)</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.message}
          onChange={this.handleChange} 
        />
      </div>
    );
  }
}

export default TwitterMessage;
