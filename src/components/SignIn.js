function SignIn() {
const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
}

return (
    <button onClick = {signInWithGoogle}> Sign In With Gooogle </button>
)
}

export default SignIn;