import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInput } from 'hooks/useInput';
import qs from 'qs';
import { MdLocationOn } from 'react-icons/md';
import { AiFillCalendar } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';
import { RiTeamFill, RiMoneyDollarBoxFill } from 'react-icons/ri';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';

const cn = classNames.bind(styles);

const SearchBar = props => {
  const [location, onLocationChange] = useInput('');
  const [date, onDateChange] = useInput('');
  const [artist, onArtistChange] = useInput('');
  const [price, onPriceChange] = useInput('');

  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    const queryStr = qs.stringify(
      {
        location: location || null,
        date: date || null,
        artist: artist || null,
        price: price || null,
      },
      { encode: false, skipNulls: true }
    );
    navigate(`/search${queryStr && `?${queryStr}`}`);
  };

  return (
    <form className={cn('search-bar')} onSubmit={onSubmit}>
      <div className={cn('search-bar__column')}>
        <header className={cn('search-bar__header')}>
          <MdLocationOn />
          <h3>Location</h3>
        </header>
        <input
          defaultValue={props.defaultLocation}
          value={location}
          onChange={onLocationChange}
          placeholder="Any city"
        />
      </div>

      <div className={cn('search-bar__column')}>
        <header className={cn('search-bar__header')}>
          <AiFillCalendar />
          <h3>Date</h3>
        </header>
        <input
          defaultValue={props.defaultDate}
          value={date}
          onChange={onDateChange}
          placeholder="Anytime"
        />
      </div>

      <div className={cn('search-bar__column')}>
        <header className={cn('search-bar__header')}>
          <RiTeamFill />
          <h3>Artist</h3>
        </header>
        <input
          defaultValue={props.defaultArtist}
          value={artist}
          onChange={onArtistChange}
          placeholder="Any artist"
        />
      </div>

      <div className={cn('search-bar__column')}>
        <header className={cn('search-bar__header')}>
          <RiMoneyDollarBoxFill />
          <h3>Price</h3>
        </header>
        <input
          defaultValue={props.defaultPrice}
          value={price}
          onChange={onPriceChange}
          placeholder="Any price"
        />
      </div>

      <button className={cn('search-btn')}>
        <ImSearch />
      </button>
    </form>
  );
};

export default SearchBar;
