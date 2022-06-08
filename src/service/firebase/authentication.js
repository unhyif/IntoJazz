import { firebaseApp } from './config';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const AUTHENTICATED_USER = 'authenticated_user';

export default class AuthService {
  constructor() {
    this.auth = getAuth(firebaseApp);
  }

  setAuthStateObserver(setUser) {
    onAuthStateChanged(this.auth, user => {
      if (user) {
        user.emailVerified ? setUser(user.uid) : this.logout();
      } else {
        setUser(null);
      }
    });
  }

  signup(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => sendEmailVerification(userCredential.user))
      .catch(error => {
        console.log(error.code, error.message);
        throw error;
      });
  }

  login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredential =>
        localStorage.setItem(
          AUTHENTICATED_USER,
          JSON.stringify(userCredential.user.uid)
        )
      )
      .catch(error => {
        console.log(error.code, error.message);
        throw error;
      });
  }

  logout() {
    return signOut(this.auth)
      .then(() =>
        localStorage.setItem(AUTHENTICATED_USER, JSON.stringify(null))
      )
      .catch(error => {
        console.log(error.code, error.message);
        throw error;
      });
  }
}
