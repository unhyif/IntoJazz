import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServiceProvider from 'contexts/ServiceContext';
import ModalDispatchProvider from 'contexts/ModalDispatchContext';
import UserProvider from 'contexts/UserContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from 'layout/Layout';
import Home from 'routes/Home/Home';
import GuestOnly from 'components/GuestOnly';

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    primary: {
      main: '#53499d',
    },
  },
});

const Signup = lazy(() => import('routes/Signup/Signup'));
const Search = lazy(() => import('routes/Search/Search'));
const Error = lazy(() => import('routes/Error/Error'));

const App = () => (
  <BrowserRouter>
    {/* <ErrorBoundary> */}
    <ServiceProvider>
      <ModalDispatchProvider>
        <UserProvider>
          <ThemeProvider theme={theme}>
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
          </ThemeProvider>
        </UserProvider>
      </ModalDispatchProvider>
    </ServiceProvider>
    {/* </ErrorBoundary> */}
  </BrowserRouter>
);

export default App;
