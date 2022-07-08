import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useServiceContext } from 'contexts/ServiceContext';
import qs from 'qs';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cn = classNames.bind(styles);

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = searchParams.get('location');
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const artist = searchParams.get('artist');
  const price = searchParams.get('price');

  const concertService = useServiceContext().concert;
  concertService.search('').then(concerts => console.log(concerts));

  return <main className={cn('search')}></main>;
};

export default Search;
