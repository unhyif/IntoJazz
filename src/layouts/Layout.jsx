import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Body from 'layouts/Body/Body';
import Footer from './Footer/Footer';
import styles from './Layout.module.scss';

const Layout = () => (
  <div className={styles.layout}>
    <Header />
    <Body>
      <Outlet />
    </Body>
    <Footer />
  </div>
);

export default Layout;
