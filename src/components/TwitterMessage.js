import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
    // console.log(`${this.props.maxChars - this.state.message.length}`)
  }

  numbCharsLeft = () => {
    console.log(`${this.props.maxChars - this.state.message.length}`)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event=>this.handleMessageChange(event)} value={this.state.message} />
        {/* {this.numbCharsLeft()} */}
    <p> Max Characters remaining: `${this.props.maxChars - this.state.message.length}`</p>
      </div>
    );
  }
}

export default TwitterMessage;
