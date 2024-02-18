import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Assuming 'app' is correctly exported from './App.js'
import { app } from './App.js';

// Initialize auth
const auth = getAuth(app);

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(result);
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        console.log(error.message);
        // ...
      });
  };

  return (
    <button onClick={signInWithGoogle}>Sign In With Google</button>
  );
}

export default SignIn;