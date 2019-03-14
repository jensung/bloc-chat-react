import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

  var config = {
    apiKey: "AIzaSyBu-dYd6QndVWDDnUg95mBaLnWO-XwH5kk",
    authDomain: "bloc-chat-react-7ea4a.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-7ea4a.firebaseio.com",
    projectId: "bloc-chat-react-7ea4a",
    storageBucket: "bloc-chat-react-7ea4a.appspot.com",
    messagingSenderId: "18239376412"
  };
  firebase.initializeApp(config);

  class App extends Component {
    constructor() {
      super();
      this.state = {
        activeRoom: '',
        user: ''
      };
      this.setActiveRoom = this.setActiveRoom.bind(this);
      this.setUser = this.setUser.bind(this);
    }

    setActiveRoom(key) {
      const newActiveRoom = key;
      this.setState({ activeRoom: newActiveRoom });
    }

    setUser(user) {
        this.setState({ user: user });
    }

    render() {
      return (
        <div className="App">
          <User
            firebase={ firebase }
            user={ this.state.user }
            setUser={ this.setUser }
          />
          <RoomList
            firebase={ firebase }
            activeRoom={ this.state.activeRoom }
            setActiveRoom={ (key) => this.setActiveRoom(key) }
          />
          <MessageList
            firebase={ firebase }
            activeRoom={ this.state.activeRoom }
            activeRoomId={ this.state.activeRoomId }
            user={ this.state.currentUser }
          />
        </div>
      );
    }
  }

  export default App;
