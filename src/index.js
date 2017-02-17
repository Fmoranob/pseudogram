import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

firebase.initializeApp({
	apiKey: "AIzaSyCZeFN6Guh1NeX5Id7ndxGoqET4xlIoyos",
    authDomain: "pseudogram-e93bb.firebaseapp.com",
    databaseURL: "https://pseudogram-e93bb.firebaseio.com",
    storageBucket: "pseudogram-e93bb.appspot.com",
    messagingSenderId: "926922334765"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
