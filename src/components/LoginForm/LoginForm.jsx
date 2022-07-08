import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useServiceContext } from 'contexts/ServiceContext';
import { useModalDispatchContext } from 'contexts/ModalDispatchContext';
import { validateInput } from 'utils/validateInput';
import LabelInputWrapper from 'components/LabelInputWrapper/LabelInputWrapper';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Button from 'components/Button/Button';
import SocialLoginButton from 'components/SocialLoginButton/SocialLoginButton';
import { FcGoogle } from 'react-icons/fc';
import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';

const cn = classNames.bind(styles);

const LoginForm = () => {
  /* states */
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const authService = useServiceContext().auth;
  const modalDispatch = useModalDispatchContext();

  /* event handlers */
  const onLoginWithEmail = e => {
    e.preventDefault();
    errorMessage && setErrorMessage('');

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const isEmailValid = validateInput('email', email);
    setIsEmailValid(isEmailValid);
    const isPasswordValid = validateInput('password', password);
    setIsPasswordValid(isPasswordValid);
    if (!(isEmailValid && isPasswordValid)) return;

    authService
      .loginWithEmail(email, password)
      .then(() => modalDispatch({ type: 'CLOSE' }))
      .catch(e => setErrorMessage(e.message));
  };

  const onSocialLogin = name =>
    authService
      .loginWithProvider(name.toLowerCase())
      .then(() => modalDispatch({ type: 'CLOSE' }))
      .catch(e => setErrorMessage(e.message));

  return (
    <>
      <form onSubmit={onLoginWithEmail}>
        <LabelInputWrapper>
          <Label htmlFor="email">Email</Label>
          <Input
            ref={emailRef}
            id="email"
            name="email"
            defaultValue=""
            placeholder="example@intojazz.com"
            autoComplete="email"
          />
        </LabelInputWrapper>
        {isEmailValid || (
          <ErrorMessage style={{ textAlign: 'right' }}>
            Enter a valid email address.
          </ErrorMessage>
        )}

        <LabelInputWrapper>
          <Label htmlFor="password">Password</Label>
          <Input
            ref={passwordRef}
            type="password"
            id="password"
            name="password"
            defaultValue=""
            placeholder="********"
            autoComplete="current-password"
          />
        </LabelInputWrapper>
        {isPasswordValid || (
          <ErrorMessage style={{ textAlign: 'right' }}>
            Use more than 8 letters containing digits,
            <br />
            upper/lowercase characters and special characters.
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

        <Button content="Log in" style={{ width: '100%', marginTop: '2em' }} />
      </form>

      <div className={cn('social-login')}>
        <span>Social Login</span>
      </div>

      <SocialLoginButton
        icon={<FcGoogle />}
        content="Log in with Google Account"
        onClick={() => onSocialLogin('google')}
      />

      <Link to="/signup">
        <p className={cn('signup')}>
          I want to create a new account with email
        </p>
      </Link>
    </>
  );
};

export default LoginForm;
