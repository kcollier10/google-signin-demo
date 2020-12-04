import './firebase/firebaseConfig'
import { clickHandler } from './util'
import { googleSignIn } from './firebase/firebaseAuthentication'
import { googleSignOut } from './firebase/firebaseAuthentication'

clickHandler("signin-google", googleSignIn)
clickHandler("app-signout", googleSignOut)


