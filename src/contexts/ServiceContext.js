import React, { createContext, useContext } from 'react';
import AuthService from 'service/firebase/authentication';

const authService = new AuthService();

const AuthServiceContext = createContext(authService);
export const useAuthServiceContext = () => useContext(AuthServiceContext);

const ServiceProvider = ({ children }) => (
  <AuthServiceContext.Provider value={authService}>
    {children}
  </AuthServiceContext.Provider>
);

export default ServiceProvider;
