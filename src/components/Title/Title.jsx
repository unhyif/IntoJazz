import React from 'react';
import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cn = classNames.bind(styles);

const Title = ({ size = 'md', children }) => (
  <h1 className={cn('title', size)}>{children}</h1>
);

export default Title;
