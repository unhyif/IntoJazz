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
import SearchBarColumn from 'components/SearchBarColumn/SearchBarColumn';

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
      <SearchBarColumn
        icon={<MdLocationOn />}
        title="Location"
        defaultValue={props.defaultLocation}
        value={location}
        onChange={onLocationChange}
        placeholder="Any city"
      />
      <SearchBarColumn
        icon={<AiFillCalendar />}
        title="Date"
        defaultValue={props.defaultDate}
        value={date}
        onChange={onDateChange}
        placeholder="Anytime"
      />
      <SearchBarColumn
        icon={<RiTeamFill />}
        title="Artist"
        defaultValue={props.defaultArtist}
        value={artist}
        onChange={onArtistChange}
        placeholder="Any artist"
      />
      <SearchBarColumn
        icon={<RiMoneyDollarBoxFill />}
        title="Price"
        defaultValue={props.defaultPrice}
        value={price}
        onChange={onPriceChange}
        placeholder="Any price"
      />
      <button className={cn('search-btn')}>
        <ImSearch />
      </button>
    </form>
  );
};

export default SearchBar;
