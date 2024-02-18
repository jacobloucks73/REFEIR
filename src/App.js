import React from 'react';
import './App.css';
import Content from './components/Content';
import SVGContainer from './components/SVGContainer';
import Navbar from './components/Navbar';

// Correct Firebase imports
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/*import { useAuthState } from 'interactiveresume/react-firebase-hooks/auth';
import { useCollectionData } from 'interactiveresume/react-firebase-hooks/firestore';*/

const firebaseConfig = {

  apiKey: "AIzaSyAKtqGxBSbiTNZr4q8dajXlwFFgbgOe8eo",
  authDomain: "ir-rf-20b4a.firebaseapp.com",
  projectId: "ir-rf-20b4a",
  storageBucket: "ir-rf-20b4a.appspot.com",
  messagingSenderId: "338155808430",
  appId: "1:338155808430:web:8cbcc11dd0df7e8ea2ef3f",
  measurementId: "G-XD4V66J55V"

}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

function App() {
  // Your component code
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <SVGContainer />
        <Content />
      </header>
    </div>
  );
}

export default App;