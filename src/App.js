import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
        activeRoom: ''
      };
    }
    
    setActiveRoom(key) {
      const newActiveRoom = key;
      this.setState({ activeRoom: newActiveRoom });
    }

    render() {
      return (
        <div className="App">
          <RoomList
            firebase={ firebase }
            activeRoom={ this.state.activeRoom }
            setActiveRoom={ (key) => this.setActiveRoom(key) }
          />
          <MessageList
            firebase={ firebase }
            activeRoom={ this.state.activeRoom }
          />
        </div>
      );
    }
  }

  export default App;
