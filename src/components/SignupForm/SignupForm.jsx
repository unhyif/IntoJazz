import React, { useState } from 'react';
import { useAuthServiceContext } from 'contexts/ServiceContext';
import { validate } from 'common/validate';
import Button from 'components/Button/Button';

const SignupForm = ({ onSuccess }) => {
  /* states */
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  /* event handlers */
  const onEmailChange = e => {
    const email = e.target.value;
    setEmail(email);
    setIsEmailValid(validate('email', email));
  };

  const onPasswordChange = e => {
    const password = e.target.value;
    setPassword(password);
    setIsPasswordValid(validate('password', password));
  };

  const onPasswordConfirmChange = e => {
    const passwordConfirm = e.target.value;
    setPasswordConfirm(passwordConfirm);
    setIsPasswordConfirmValid(password === passwordConfirm);
  };

  const authService = useAuthServiceContext();
  const onSubmit = e => {
    e.preventDefault();
    authService
      .signup(email, password)
      .then(() => onSuccess())
      .catch(e => setErrorMessage(e.message));
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        value={email}
        placeholder="example@intojazz.com"
        onChange={onEmailChange}
        autoComplete="email"
      />
      {!!email.length && !isEmailValid && <p>Enter a valid email address.</p>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        placeholder="********"
        onChange={onPasswordChange}
      />
      {!!password.length && !isPasswordValid && (
        <p>
          Use more than 8 letters containing digits, upper/lowercase characters
          and special characters.
        </p>
      )}

      <label htmlFor="password-confirm">Confirm Password</label>
      <input
        type="password"
        id="password-confirm"
        name="password-confirm"
        value={passwordConfirm}
        placeholder="********"
        onChange={onPasswordConfirmChange}
      />
      {!!password.length && !isPasswordConfirmValid && (
        <p>It must match the password.</p>
      )}

      {errorMessage && <p>{errorMessage}</p>}

      <Button
        content="Sign Up"
        disabled={!(isEmailValid && isPasswordValid && isPasswordConfirmValid)}
      ></Button>
    </form>
  );
};

export default SignupForm;
