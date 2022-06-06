import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cn = classNames.bind(styles);

const Button = ({ content, disabled = false, bgColor = 'white' }) => {
  return (
    <button className={cn(bgColor)} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
