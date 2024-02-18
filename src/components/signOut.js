import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { app } from './App.js'; // Ensure this correctly imports 'app' from where it's initialized

// Initialize auth
const auth = getAuth(app);

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => signOut(auth)}>Sign Out</button>
    );
}

export default SignOut;