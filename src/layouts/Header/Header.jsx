import React from 'react';
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
  /* contexts */
  const user = useUserContext();
  const authService = useAuthServiceContext();
  const openModal = useModalHandlersContext().openModal;

  /* event handlers */
  const onLogin = () =>
    openModal({
      open: true,
      title: 'Log in',
      description: 'Log in with email or other providers',
      content: <LoginForm />,
    });
  const onLogout = () => authService.logout();

  return (
    <header>
      <Link to="/">IntoJazz</Link>
      {user ? (
        <Button content="Log out" bgColor="lightPurple" onClick={onLogout} />
      ) : (
        <Button content="Log in" bgColor="lightPurple" onClick={onLogin} />
      )}
    </header>
  );
};

export default Header;
