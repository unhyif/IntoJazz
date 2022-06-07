import React, { useRef, useState } from 'react';
import { useAuthServiceContext } from 'contexts/ServiceContext';
import { useModalHandlersContext } from 'contexts/ModalHandlersContext';
import { validate } from 'common/validate';
import Button from 'components/Button/Button';

const LoginForm = () => {
  /* states */
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();
  const authService = useRef(useAuthServiceContext());
  const closeModal = useRef(useModalHandlersContext().closeModal);

  /* event handler */
  const onSubmit = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const isEmailValid = validate('email', email);
    setIsEmailValid(isEmailValid);
    const isPasswordValid = validate('password', password);
    setIsPasswordValid(isPasswordValid);
    if (!isEmailValid || !isPasswordValid) return;

    authService.current.login(email, password).then(() => closeModal.current());
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input
        ref={emailRef}
        id="email"
        name="email"
        defaultValue=""
        placeholder="example@intojazz.com"
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
      />
      {!isPasswordValid && (
        <p>
          Use more than 8 letters containing digits, upper/lowercase characters
          and special characters.
        </p>
      )}

      <Button content="Log in"></Button>
    </form>
  );
};

export default LoginForm;
