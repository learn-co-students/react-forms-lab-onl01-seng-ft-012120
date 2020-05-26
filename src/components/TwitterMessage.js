import React from "react";

// PROPS: maxChars: 280
class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = { 
      messageText: "",
      remainingChars: props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      messageText: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.messageText} onChange={event => this.handleChange(event)}/>
        <p name="remainingCharacters" id="remainingCharacters">Remaining Characters: {this.state.remainingChars}</p>
      </div>  
    );
  }
}

export default TwitterMessage;
