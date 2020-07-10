import React from "react";
import "./Messages.css";

const axios = require("axios");

class Messages extends React.Component {
  state = {
    sender: "richard@cohort14.com",
    recipient: "lucy@cohort14.com",
    dateTime: "",
    messageBody: "",
    read: false,
    messagehistory:[]
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
      await this.handleMessage()
  };

  handleMessage = ()=> {
    const users = {
      sender: this.state.sender,
      recipient: this.state.recipient,
    }
      axios
          .get("/messages/get", {params: users})
          .then( (response)=> {
            this.setState({messagehistory: response.data})
            console.log("success");
          }).then(this.showMessages)
          .catch( (error)=> {
            console.log("failure");
            console.log(error);
          });
  }

    componentDidMount() {
      // const users = {
      //   sender: this.state.sender,
      //   recipient: this.state.recipient,
      // }
      //   axios
      //       .get("/messages/get", {params: users})
      //       .then( (response)=> {
      //         this.setState({messagehistory: response.data})
      //         console.log("success");
      //       }).then(this.showMessages)
      //       .catch( (error)=> {
      //         console.log("failure");
      //         console.log(error);
      //       });
      this.handleMessage()
    }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
    // showMessages =()=>{

    //   for (const message of this.state.messagehistory){
    //   console.log(message.dateTime)
    //   console.log(message.sender)
    //   console.log(message.messageBody)
    //   return (
    //     <ul>
    //       <li>{message.dateTime}</li>
    //       <li>{message.sender}</li>
    //       <li>{message.messageBody}</li>
    //     </ul>
    //   )

    //   }

    // } 
  render() {


    
      const items = []
    
      for (const [index, message] of this.state.messagehistory.entries()) {
        items.push(
        <ul key={index} id="messagesUL">
            <li id="listSender">{message.sender}</li>
            <li>{message.dateTime}</li>
            <li>{message.messageBody}</li>
        </ul>
        )
      }
    

    //console.log(this.state.messagehistory)
    return (
      <div id="messagePage">
        <div id="contacts">Contacts you have previously messaged</div>
        <div id="messagingContainer">
          <div id="messageHistory">
            <div id="messageHistoryTitle">
              Message history
            </div>

            {items}
          </div>
          <div id="sendMessageContainer">
            <form onSubmit={this.handleSubmit}>
                <div id="sendingToFromDiv">
                    <label htmlFor="recipient">Sending to:</label>
                    <input
                        type="text"
                        name="recipient"
                        value={this.state.recipient}
                        onChange={this.handleChange}
                        id="recipInput"
                    />
                    {/* <label htmlFor="sender">Sending from:</label>
                    <input
                        type="text"
                        name="sender"
                        value={this.state.sender}
                        onChange={this.handleChange}
                    /> */}
                </div>
                <div id="inputMessageDiv">
              <label htmlFor="messageBody">Input message here:</label>
              <textarea
                name="messageBody"
                value={this.state.messageBody}
                onChange={this.handleChange}
                id="messageTextArea"
              />
              <button id="sendMessageBtn" type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
