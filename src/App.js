import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServiceProvider from 'contexts/ServiceContext';
import ModalDispatchProvider from 'contexts/ModalDispatchContext';
import UserProvider from 'contexts/UserContext';
import Layout from 'layouts/Layout';
import Home from 'routes/Home/Home';
import GuestOnly from 'components/GuestOnly';

const Signup = lazy(() => import('routes/Signup/Signup'));
const Search = lazy(() => import('routes/Search/Search'));
const Error = lazy(() => import('routes/Error/Error'));

const App = () => (
  <BrowserRouter>
    {/* <ErrorBoundary> */}
    <ServiceProvider>
      <ModalDispatchProvider>
        <UserProvider>
          <Suspense fallback={<div />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                  path="signup"
                  element={
                    <GuestOnly>
                      <Signup />
                    </GuestOnly>
                  }
                />
                <Route path="search" element={<Search />} />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </Suspense>
        </UserProvider>
      </ModalDispatchProvider>
    </ServiceProvider>
    {/* </ErrorBoundary> */}
  </BrowserRouter>
);

export default App;
