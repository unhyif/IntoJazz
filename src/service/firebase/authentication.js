import { firebaseApp } from './config';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export default class AuthService {
  constructor() {
    this.auth = getAuth(firebaseApp);
  }

  setAuthStateObserver(setUser) {
    onAuthStateChanged(this.auth, user => {
      if (user) {
        setUser(user.uid);
      } else {
        setUser(null);
      }
    });
  }

  signup(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  login(email, password) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  logout() {
    signOut(this.auth);
  }
}
