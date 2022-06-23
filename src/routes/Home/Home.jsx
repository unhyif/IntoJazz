import React from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cn = classNames.bind(styles);

const Home = () => (
  <div className={cn('background')}>
    <main className={cn('home')}>
      <section className={cn('home__center')}>
        <h1 className={cn('title')}>
          Find the perfect concert for your jazzy mood today.
        </h1>
        <SearchBar />
      </section>
    </main>
  </div>
);

export default Home;
