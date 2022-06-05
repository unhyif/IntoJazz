import React from 'react';
import { Outlet } from 'react-router-dom';
import MainContainer from 'layouts/MainContainer/MainContainer';

const Layout = () => (
  <MainContainer>
    <Outlet />
  </MainContainer>
);

export default Layout;
