import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServiceContextProvider from 'contexts/ServiceContext';
import UserContextProvider from 'contexts/UserContext';
import Layout from 'layouts/Layout';
import Home from 'routes/Home/Home';
import ErrorBoundary from 'components/ErrorBoundary';

const Signup = lazy(() => import('routes/Signup/Signup'));
const Error = lazy(() => import('routes/Error/Error'));

const App = () => {
  return (
    <BrowserRouter>
      {/* <ErrorBoundary> */}
      <Suspense fallback={<div />}>
        <ServiceContextProvider>
          <UserContextProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="signup" element={<Signup />} />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </UserContextProvider>
        </ServiceContextProvider>
      </Suspense>
      {/* </ErrorBoundary> */}
    </BrowserRouter>
  );
};

export default App;
