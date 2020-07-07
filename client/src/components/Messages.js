import React from "react";

class Messages extends React.Component {
    state = {
        sender: '',
        recipient: '',
        dateTime: new Date(),
        messageBody: '',
        read: false,
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Hello World");
    }

    render(){
        return (
            <div id="messages">
                Hello LucyHD (coming soon in 16k)
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="messageTest">Input message here:</label>
                    <input type="text" name="messageTest" />
                    <button type="submit">Send message</button>
                </form>
            </div>
        )
    }
}

export default Messages;