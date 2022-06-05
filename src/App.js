import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'layouts/Layout';
import Home from 'routes/Home/Home';
import ErrorBoundary from 'components/ErrorBoundary';

const Error = lazy(() => import('routes/Error/Error'));

const App = () => (
  <BrowserRouter>
    {/* <ErrorBoundary> */}
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
    {/* </ErrorBoundary> */}
  </BrowserRouter>
);

export default App;
