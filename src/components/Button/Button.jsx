import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

function noFunction() {}

const cn = classNames.bind(styles);

const Button = ({
  label,
  content,
  theme = 'white',
  disabled = false,
  onClick = noFunction,
}) => (
  <button
    aria-label={label}
    className={cn(theme)}
    disabled={disabled}
    onClick={onClick}
  >
    {content}
  </button>
);

export default Button;
