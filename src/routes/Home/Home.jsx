import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cn = classNames.bind(styles);

const Home = () => (
  <div className={cn('background')}>
    <main className={cn('home')}>
      <h1 className={cn('title')}>
        Find the perfect concert for your jazzy mood today.
      </h1>
    </main>
  </div>
);

export default Home;
