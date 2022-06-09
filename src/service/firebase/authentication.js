import { firebaseApp } from './config';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

function getErrorMessage(errorCode) {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'This email is already in use.';
    case 'auth/user-not-found':
      return 'There is no existing account corresponding to this email.';
    case 'auth/wrong-password':
      return 'The password is incorrect.';
    default:
      return `[${errorCode}]: Please report it to us.`;
  }
}

const AUTHENTICATED_USER = 'authenticated_user';

export default class AuthService {
  constructor() {
    this.auth = getAuth(firebaseApp);
  }

  setAuthStateObserver(setUser, onUnverified) {
    onAuthStateChanged(this.auth, user => {
      if (!user) {
        setUser(null);
        return;
      }

      if (user.emailVerified) {
        setUser(user.uid);
        return;
      }

      this.logout().then(
        () =>
          user.metadata.createdAt !== user.metadata.lastLoginAt &&
          onUnverified()
      );
    });
  }

  signup(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => sendEmailVerification(userCredential.user))
      .catch(e => {
        throw new Error(getErrorMessage(e.code));
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
      .catch(e => {
        throw new Error(getErrorMessage(e.code));
      });
  }

  logout() {
    return signOut(this.auth)
      .then(() =>
        localStorage.setItem(AUTHENTICATED_USER, JSON.stringify(null))
      )
      .catch(e => console.error(e.code));
  }
}
