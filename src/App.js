import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServiceProvider from 'contexts/ServiceContext';
import ModalHandlersProvider from 'contexts/ModalHandlersContext';
import UserProvider from 'contexts/UserContext';
import Layout from 'layouts/Layout';
import Home from 'routes/Home/Home';
import GuestOnly from 'components/GuestOnly';
import ErrorBoundary from 'components/ErrorBoundary';

const Signup = lazy(() => import('routes/Signup/Signup'));
const Error = lazy(() => import('routes/Error/Error'));

const App = () => (
  <BrowserRouter>
    {/* <ErrorBoundary> */}
    <Suspense fallback={<div />}>
      <ServiceProvider>
        <ModalHandlersProvider>
          <UserProvider>
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
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </UserProvider>
        </ModalHandlersProvider>
      </ServiceProvider>
    </Suspense>
    {/* </ErrorBoundary> */}
  </BrowserRouter>
);

export default App;
