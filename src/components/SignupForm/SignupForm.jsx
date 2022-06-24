import React, { useState } from 'react';
import { useAuthServiceContext } from 'contexts/ServiceContext';
import { validate } from 'utils/validate';
import LabelInputWrapper from 'components/LabelInputWrapper/LabelInputWrapper';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
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
      <LabelInputWrapper>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          value={email}
          placeholder="example@intojazz.com"
          onChange={onEmailChange}
          autoComplete="email"
        />
      </LabelInputWrapper>
      {!!email.length && !isEmailValid && (
        <ErrorMessage style={{ textAlign: 'right' }}>
          Enter a valid email address.
        </ErrorMessage>
      )}

      <LabelInputWrapper>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="********"
          onChange={onPasswordChange}
        />
      </LabelInputWrapper>
      {!!password.length && !isPasswordValid && (
        <ErrorMessage style={{ textAlign: 'right' }}>
          Use more than 8 letters containing digits, upper/lowercase characters
          and special characters.
        </ErrorMessage>
      )}

      <LabelInputWrapper>
        <Label htmlFor="password-confirm">Confirm Password</Label>
        <Input
          type="password"
          id="password-confirm"
          name="password-confirm"
          value={passwordConfirm}
          placeholder="********"
          onChange={onPasswordConfirmChange}
        />
      </LabelInputWrapper>
      {!!passwordConfirm.length && !isPasswordConfirmValid && (
        <ErrorMessage style={{ textAlign: 'right' }}>
          It must match the password.
        </ErrorMessage>
      )}

      {errorMessage && (
        <ErrorMessage
          style={{
            fontSize: '1.5rem',
            textAlign: 'center',
            marginTop: '2em',
          }}
        >
          {errorMessage}
        </ErrorMessage>
      )}

      <Button
        content="Sign Up"
        disabled={!(isEmailValid && isPasswordValid && isPasswordConfirmValid)}
        style={{ width: '100%', marginTop: '2em' }}
      ></Button>
    </form>
  );
};

export default SignupForm;
