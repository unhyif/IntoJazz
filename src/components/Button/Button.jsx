import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

function noFunction() {}

const cn = classNames.bind(styles);

const Button = ({
  content,
  disabled = false,
  bgColor = 'white',
  onClick = noFunction,
  label,
}) => (
  <button
    className={cn(bgColor)}
    disabled={disabled}
    onClick={onClick}
    aria-label={label}
  >
    {content}
  </button>
);

export default Button;
