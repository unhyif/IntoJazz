import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Button from 'components/Button/Button';
import styles from './Header.module.scss';
import { useUserContext } from 'contexts/UserContext';
import { useAuthServiceContext } from 'contexts/ServiceContext';

const cn = classNames.bind(styles);

const Header = () => {
  const authService = useAuthServiceContext();
  const user = useUserContext();

  const onLogout = () => authService.logout();

  return (
    <header>
      <Link to="/">IntoJazz</Link>
      {user ? (
        <Button content="Log out" onClick={onLogout} />
      ) : (
        <Link to="/login">Log in</Link>
      )}
      {/* <Button content="Log in" bgColor="light-purple" /> */}
    </header>
  );
};

export default Header;
