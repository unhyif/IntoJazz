import React, { useContext } from 'react';
import AuthService from 'service/firebase/authentication';

const authService = new AuthService();

const AuthServiceContext = React.createContext(authService);
export const useAuthServiceContext = () => useContext(AuthServiceContext);

const ServiceContextProvider = ({ children }) => (
  <AuthServiceContext.Provider value={authService}>
    {children}
  </AuthServiceContext.Provider>
);

export default ServiceContextProvider;
