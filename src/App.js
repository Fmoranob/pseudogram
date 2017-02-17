import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  componentWillMount () {
    firebase.auth().onAuthStateChange(user => {
      this.setState({ user });
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton() {
    // Si el usuario esta logeado
    if (this.state.user) {
      return (
        <div>
          <img src={this.state.user.photoUrl} alt={this.state.user.displayName} />
          <p>Hola {this.state.user.displayName}</p>
          <button onClick={this.hadleLogout}></button>
        </div>
      )
    } else {
      // Si no lo esta
      return(
        <button onClick={this.handleAuth}>Login con Google</button>
      );

    }

    

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Psudogram</h2>
        </div>
        <p className="App-intro">
          { this.renderLoginButton() }
        </p>
      </div>
    );
  }
}

export default App;
