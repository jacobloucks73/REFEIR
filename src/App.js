import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initialize({

  apiKey: "AIzaSyAKtqGxBSbiTNZr4q8dajXlwFFgbgOe8eo",
  authDomain: "ir-rf-20b4a.firebaseapp.com",
  projectId: "ir-rf-20b4a",
  storageBucket: "ir-rf-20b4a.appspot.com",
  messagingSenderId: "338155808430",
  appId: "1:338155808430:web:8cbcc11dd0df7e8ea2ef3f",
  measurementId: "G-XD4V66J55V"

})
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
// if user is signed in (user == true) then show x, otherwise show y
// {user ? <x/> : <y/>}
      </header>
    </div>
  );
}

export default App;
