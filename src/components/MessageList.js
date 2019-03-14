import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.messageRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.messageRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat(message) });
    });
  }

  displayRoomMessage(message, index) {
    if(message.roomId === this.props.activeRoom) {
      return(
        <div className="message-content">
          <p key={index}>Username: {message.username}</p>
          <p key={index}>Message: {message.content}</p>
          <p key={index}>Sent at: {message.sentAt}</p>
        </div>
      );
    }}

  render() {
    return(
      <div className="messages">
      <h3>{ this.props.activeRoomName }</h3>
        { this.state.messages.map((message, index) =>
            this.displayRoomMessage(message, index)
          )
        }
      </div>
    );
  }
}

export default MessageList;
