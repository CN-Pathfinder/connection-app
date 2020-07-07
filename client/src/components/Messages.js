import React from "react";

class Messages extends React.Component {
    state = {
        sender: '',
        recipient: '',
        dateTime: new Date(),
        messageBody: '',
        read: false,
    }

    render(){
        return (
            <div id="messages">
                Hello LucyHD (coming soon in 16k)
            </div>
        )
    }
}

export default Messages;