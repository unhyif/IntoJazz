import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

function noFunction() {}

const cn = classNames.bind(styles);

const Button = ({
  content,
  bgColor,
  style,
  disabled = false,
  onClick = noFunction,
}) => (
  <button
    aria-label={content}
    className={cn('btn', { [bgColor]: bgColor })}
    style={style}
    disabled={disabled}
    onClick={onClick}
  >
    {content}
  </button>
);

export default Button;
