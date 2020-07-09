import React from "react";
import "./Messages.css";

const axios = require("axios");

class Messages extends React.Component {
  state = {
    sender: "",
    recipient: "",
    dateTime: "",
    messageBody: "",
    read: false,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.state.dateTime = new Date();

    axios
      .post("/messages", this.state)
      .then(function (response) {
        console.log("success");
        console.log(response);
      })
      .catch(function (error) {
        console.log("failure");
        console.log(error);
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div id="messagePage">
        <div id="contacts">Contacts you have previously messaged</div>
        <div id="messagingContainer">
          <div id="messageHistory">Message history</div>
          <div id="sendMessageContainer">
            <form onSubmit={this.handleSubmit}>
                <div id="sendingToFromDiv">
                    <label htmlFor="recipient">Sending to:</label>
                    <input
                        type="text"
                        name="recipient"
                        value={this.state.recipient}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="sender">Sending from:</label>
                    <input
                        type="text"
                        name="sender"
                        value={this.state.sender}
                        onChange={this.handleChange}
                    />
                </div>
                <div id="inputMessageDiv">
              <label htmlFor="messageBody">Input message here:</label>
              <textarea
                name="messageBody"
                value={this.state.messageBody}
                onChange={this.handleChange}
              />
              <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
