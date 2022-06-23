import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { AiFillCalendar } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';
import { RiTeamFill, RiMoneyDollarBoxFill } from 'react-icons/ri';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';

const cn = classNames.bind(styles);

const SearchBar = () => (
  <div className={cn('search-bar')}>
    <div className={cn('search-bar__column')}>
      <header className={cn('search-bar__header')}>
        <MdLocationOn />
        <h3>Location</h3>
      </header>
      <input placeholder="Any city" />
    </div>

    <div className={cn('search-bar__column')}>
      <header className={cn('search-bar__header')}>
        <AiFillCalendar />
        <h3>Date</h3>
      </header>
      <input placeholder="Anytime" />
    </div>

    <div className={cn('search-bar__column')}>
      <header className={cn('search-bar__header')}>
        <RiTeamFill />
        <h3>Artist</h3>
      </header>
      <input placeholder="Any artist" />
    </div>

    <div className={cn('search-bar__column')}>
      <header className={cn('search-bar__header')}>
        <RiMoneyDollarBoxFill />
        <h3>Price</h3>
      </header>
      <input placeholder="Any price" />
    </div>

    <button className={cn('search-btn')}>
      <ImSearch />
    </button>
  </div>
);

export default SearchBar;
