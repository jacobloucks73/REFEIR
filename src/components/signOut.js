function signOut(){
    return auth.currentUser && (

        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}