import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div className="App">
      <header>
      <h2>Bloc Chat</h2>
      </header>
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
