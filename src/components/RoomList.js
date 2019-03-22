import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props){
    super(props);
    this.state = {
      rooms: [],
      newRoomName: '',
      roomId: ''
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;

      this.setState({ rooms: this.state.rooms.concat(room) });
    });
  }

  handleChange(event) {
    this.setState({ newRoomName: event.target.value });
  }

  createRoom(event) {
    event.preventDefault();
    const newRoom = this.state.newRoomName;
    this.roomsRef.push({
      name: newRoom
    });
    const emptyString = '';
    this.setState({ newRoomName: emptyString });
  }

  render() {
    return(
      <nav className="container">
        <h1>Bloc Chat</h1>
        <User
          firebase={ this.props.firebase }
          user={ this.props.user }
          userName={ this.props.userName }
          setUser={ (user) => this.props.setUser(user) }
        />
        {
          this.state.rooms.map((room, index) =>
            <a
              key={ room.key }
              onClick={
                      (key) => this.props.setActiveRoom(room.key)
                      }
              href="#">
              <h3>{ room.name }</h3>
            </a>
          )
        }

        <form onSubmit={ (event) => this.createRoom(event) }>
          <label>
            Create a New Room:
          </label>
          <input
            type="text"
            value={ this.state.newRoomName }
            onChange={ (event) => this.handleChange(event) }
          />
          <input type="submit" value="Create Room" />
        </form>
      </nav>
    );
  }
}

export default RoomList;
