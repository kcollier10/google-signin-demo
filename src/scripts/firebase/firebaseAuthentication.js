import firebase from 'firebase/app'

import 'firebase/auth'

const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => console.log("Successfully logged in with Google", result.user))
        .catch(error => console.error("There was an error while signing in with Google: ", error))
}

const googleSignOut = () => {
    firebase.auth().signOut()
        .then( () => {
            console.log("User has signed out.")
        })
        .catch(error => console.error("There was an error."))
}

module.exports = {
    googleSignIn, googleSignOut
}