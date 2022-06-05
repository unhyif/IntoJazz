import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cn = classNames.bind(styles);

const Button = ({ content, bgColor = 'white' }) => {
  return <button className={cn(bgColor)}>{content}</button>;
};

export default Button;
