import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user);
    });
  }

  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider);
  }

  signOut() {
    this.props.firebase.auth().signOut();
  }

  displayGuest(user) {
    if(user === null){
      return(
        <h3>Hi, Guest!</h3>
      );
    } else {
      return(
        <h3>Hi, { this.props.user.displayName }!</h3>
      );
    }
  }

  render() {
    return(
      <div className="userNameContainer">
        { this.displayGuest(this.props.user) }
        <button onClick={ () => this.signIn() }>Sign In</button>
        <button onClick={ () => this.signOut() }>Sign Out</button>
      </div>
    );
  }
}

export default User;
