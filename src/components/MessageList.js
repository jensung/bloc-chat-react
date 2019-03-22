import React, { Component } from 'react';
import CreateMessage from './CreateMessage';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
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

  handleChange(e) {
    this.setState({ newMessageContent: e.target.value });
  }

  displayRoomMessage(message, index) {
    if(message.roomId === this.props.activeRoom) {
      return(
        <div key={index} className="message-content">
          <p key={message.username}>Username: {message.username}</p>
          <p key={message.content}>Message: {message.content}</p>
          <p key={message.sentAt}>Sent at: {message.sentAt}</p>
        </div>
      );
    }}

  render() {
    return(
      <div className="message-container">
        <div className="messages">
        <h3>{ this.props.activeRoomName }</h3>
          { this.state.messages.map((message, index) =>
            this.displayRoomMessage(message, index)
          )}
        </div>
        <CreateMessage
          firebase={ this.props.firebase }
          activeRoom={ this.props.activeRoom }
          user={ this.props.user }
        />
        </div>
    );
  }
}

export default MessageList;
