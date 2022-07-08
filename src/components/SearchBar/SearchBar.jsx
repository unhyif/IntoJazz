import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInput } from 'hooks/useInput';
import qs from 'qs';
import SearchBarColumn from 'components/SearchBarColumn/SearchBarColumn';
import { MdLocationOn } from 'react-icons/md';
import { AiFillCalendar } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';
import { RiTeamFill, RiMoneyDollarBoxFill } from 'react-icons/ri';
import DateRangePicker from 'components/DateRangePicker/DateRangePicker';
import { formatDate } from 'utils/formatDate';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';

const cn = classNames.bind(styles);

const SearchBar = props => {
  const [location, onLocationChange] = useInput('');
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [artist, onArtistChange] = useInput('');
  const [price, onPriceChange] = useInput('');

  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    const queryStr = qs.stringify(
      {
        location: location || null,
        from: formatDate('yyyymmdd', dateRange[0]),
        to: formatDate('yyyymmdd', dateRange[1]),
        artist: artist || null,
        price: price || null,
      },
      { encode: false, skipNulls: true }
    );
    navigate(`/search${queryStr && `?${queryStr}`}`);
  };

  return (
    <form className={cn('search-bar')} onSubmit={onSubmit}>
      <SearchBarColumn icon={<MdLocationOn />} title="Location">
        <input
          defaultValue={props.defaultLocation}
          value={location}
          onChange={onLocationChange}
          placeholder="Any city"
        />
      </SearchBarColumn>
      <SearchBarColumn icon={<AiFillCalendar />} title="Date">
        <DateRangePicker range={dateRange} setRange={setDateRange} />
      </SearchBarColumn>
      <SearchBarColumn icon={<RiTeamFill />} title="Artist">
        <input
          defaultValue={props.defaultArtist}
          value={artist}
          onChange={onArtistChange}
          placeholder="Any artist"
        />
      </SearchBarColumn>
      <SearchBarColumn icon={<RiMoneyDollarBoxFill />} title="Price">
        <input
          defaultValue={props.defaultPrice}
          value={price}
          onChange={onPriceChange}
          placeholder="Any price"
        />
      </SearchBarColumn>

      <button className={cn('search-btn')}>
        <ImSearch />
      </button>
    </form>
  );
};

export default SearchBar;
