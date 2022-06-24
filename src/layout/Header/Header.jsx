import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';
import { useServiceContext } from 'contexts/ServiceContext';
import { useModalDispatchContext } from 'contexts/ModalDispatchContext';
import { FaGuitar } from 'react-icons/fa';
import LoginForm from 'components/LoginForm/LoginForm';
import Button from 'components/Button/Button';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cn = classNames.bind(styles);

const Header = () => {
  /* contexts */
  const user = useUserContext();
  const authService = useServiceContext().auth;
  const modalDispatch = useModalDispatchContext();

  /* event handlers */
  const onLogin = () =>
    modalDispatch({
      type: 'OPEN',
      payload: {
        title: 'Log in',
        description: 'Log in with email or other providers',
        content: <LoginForm />,
      },
    });
  const onLogout = () => authService.logout();

  return (
    <header className={cn('header')}>
      <Link to="/" className={cn('brand')}>
        <FaGuitar />
        <span>IntoJazz</span>
      </Link>
      {user ? (
        <Button content="Log out" onClick={onLogout} />
      ) : (
        <Button content="Log in" onClick={onLogin} />
      )}
    </header>
  );
};

export default Header;
