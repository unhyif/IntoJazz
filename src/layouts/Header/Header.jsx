import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Button from 'components/Button/Button';
import styles from './Header.module.scss';

const cn = classNames.bind(styles);

const Header = () => {
  return (
    <header>
      <Link to="/">IntoJazz</Link>
      <Button content="Log in" bgColor="light-purple" />
    </header>
  );
};

export default Header;
