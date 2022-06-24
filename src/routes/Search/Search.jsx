import React from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cn = classNames.bind(styles);

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = searchParams.get('location');
  const date = searchParams.get('date');
  const artist = searchParams.get('artist');
  const price = searchParams.get('price');

  return (
    <main className={cn('search')}>
      {location} {date} {artist} {price}
    </main>
  );
};

export default Search;
