import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>
          Remaining characters:{" "}
          {this.props.maxChars - this.state.inputValue.length}
        </p>
        <input
          onChange={this.handleChange}
          value={this.state.inputValue}
          type="text"
          name="message"
          id="message"
        />
      </div>
    );
  }
}

export default TwitterMessage;
