import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: ""};
  }

  handleOnChange = (event) =>
  {
   this.setState({
    inputValue: event.target.value
   })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Remaining chars: {this.props.maxChars - this.state.inputValue.length}</p>
        <input type="text" name="message" id="message" onChange={this.handleOnChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
