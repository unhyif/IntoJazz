import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Container from 'layouts/Container/Container';
import Footer from './Footer/Footer';

const Layout = () => (
  <>
    <Header />
    <Container>
      <Outlet />
    </Container>
    <Footer />
  </>
);

export default Layout;
