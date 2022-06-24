import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBarColumn.module.scss';

const cn = classNames.bind(styles);

const SearchBarColumn = ({ icon, title, ...others }) => (
  <div className={cn('column')}>
    <header className={cn('header')}>
      {icon}
      <h3>{title}</h3>
    </header>
    <input {...others} />
  </div>
);

export default SearchBarColumn;
