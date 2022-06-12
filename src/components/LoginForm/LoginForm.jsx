import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthServiceContext } from 'contexts/ServiceContext';
import { useModalDispatchContext } from 'contexts/ModalDispatchContext';
import { validate } from 'common/validate';
import Button from 'components/Button/Button';

const LoginForm = () => {
  /* states */
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const authService = useAuthServiceContext();
  const modalDispatch = useModalDispatchContext();

  /* event handlers */
  const onLoginWithEmail = e => {
    e.preventDefault();
    errorMessage && setErrorMessage('');

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const isEmailValid = validate('email', email);
    setIsEmailValid(isEmailValid);
    const isPasswordValid = validate('password', password);
    setIsPasswordValid(isPasswordValid);
    if (!(isEmailValid && isPasswordValid)) return;

    authService
      .loginWithEmail(email, password)
      .then(() => modalDispatch({ type: 'CLOSE' }))
      .catch(e => setErrorMessage(e.message));
  };

  const onLoginWithProvider = name =>
    authService
      .loginWithProvider(name.toLowerCase())
      .then(() => modalDispatch({ type: 'CLOSE' }))
      .catch(e => setErrorMessage(e.message));

  return (
    <>
      <form onSubmit={onLoginWithEmail}>
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          id="email"
          name="email"
          defaultValue=""
          placeholder="example@intojazz.com"
          autoComplete="email"
        />
        {!isEmailValid && <p>Enter a valid email address.</p>}

        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
          defaultValue=""
          placeholder="********"
          autoComplete="current-password"
        />
        {!isPasswordValid && (
          <p>
            Use more than 8 letters containing digits, upper/lowercase
            characters and special characters.
          </p>
        )}

        <Button content="Log in" />
      </form>

      <div>
        {errorMessage && <p>{errorMessage}</p>}

        <Button
          content="Log in with Google Account"
          theme="google"
          onClick={() => onLoginWithProvider('google')}
        />

        <Link to="/signup">I want to create a new account with email</Link>
      </div>
    </>
  );
};

export default LoginForm;
