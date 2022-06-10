import { firebaseApp } from './config';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
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
    case 'auth/cancelled-popup-request':
      return 'The login popups got cancelled due to successively triggered popup operations.';
    case 'auth/popup-closed-by-user':
      return 'The login popup got closed by the user.';
    default:
      return `[${errorCode}]: Please report it to us.`;
  }
}

function saveToLocalStorage(payload) {
  localStorage.setItem('authenticated_user', JSON.stringify(payload));
}

export default class AuthService {
  constructor() {
    this.auth = getAuth(firebaseApp);
    this.googleProvider = new GoogleAuthProvider();
    this.facebookProvider = new FacebookAuthProvider();
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

  loginWithEmail(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => saveToLocalStorage(userCredential.user.uid))
      .catch(e => {
        throw new Error(getErrorMessage(e.code));
      });
  }

  getProvider(name) {
    try {
      return this[`${name}Provider`];
    } catch {
      throw new Error(`${name} provider is not registered.`);
    }
  }

  loginWithProvider(name) {
    return signInWithPopup(this.auth, this.getProvider(name))
      .then(result => saveToLocalStorage(result.user.uid))
      .catch(e => {
        throw new Error(getErrorMessage(e.code));
      });
  }

  logout() {
    return signOut(this.auth)
      .then(() => saveToLocalStorage(null))
      .catch(e => console.error(e.code));
  }
}
