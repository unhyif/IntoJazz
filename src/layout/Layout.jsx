import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

const Layout = () => (
  <>
    <Header />
    <Body>
      <Outlet />
    </Body>
    <Footer />
  </>
);

export default Layout;
