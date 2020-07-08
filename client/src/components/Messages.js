import React from "react";

const axios = require('axios');

class Messages extends React.Component {
    state = {
        sender: '',
        recipient: '',
        dateTime: '',
        messageBody: '',
        read: false,
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.state.dateTime = new Date();
        
        axios.post('/messages', this.state)
          .then(function (response) {
            console.log("success");
            console.log(response);
          })
          .catch(function (error) {
            console.log("failure")
            console.log(error);
          });
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return (
            <div id="messages">
                Hello LucyHD (coming soon in 16k)
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="sender" >Sending from:</label>
                    <input type="text" name="sender" value={this.state.sender} onChange={this.handleChange}/>
                    <label htmlFor="recipient" >Sending to:</label>
                    <input type="text" name="recipient" value={this.state.recipient} onChange={this.handleChange}/>
                    <label htmlFor="messageBody">Input message here:</label>
                    <textarea name="messageBody" value={this.state.messageBody} onChange={this.handleChange} />
                    <button type="submit">Send message</button>
                </form>
            </div>  
        )
    }
}

export default Messages;