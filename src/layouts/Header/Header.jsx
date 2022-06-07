import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';
import { useAuthServiceContext } from 'contexts/ServiceContext';
import { useModalHandlersContext } from 'contexts/ModalHandlersContext';
import classNames from 'classnames/bind';
import LoginForm from 'components/LoginForm/LoginForm';
import Button from 'components/Button/Button';
import styles from './Header.module.scss';

const cn = classNames.bind(styles);

const Header = () => {
  const user = useUserContext();
  const authService = useRef(useAuthServiceContext());
  const openModal = useRef(useModalHandlersContext().openModal);

  const onLogin = useCallback(
    () =>
      openModal.current({
        open: true,
        title: 'Log in',
        description: 'Log in with email or other providers',
        content: <LoginForm />,
      }),
    []
  );
  const onLogout = useCallback(() => authService.current.logout(), []);

  return (
    <header>
      <Link to="/">IntoJazz</Link>
      {user ? (
        <Button content="Log out" bgColor="light-purple" onClick={onLogout} />
      ) : (
        <Button content="Log in" bgColor="light-purple" onClick={onLogin} />
      )}
    </header>
  );
};

export default Header;
