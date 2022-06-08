import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuthServiceContext } from './ServiceContext';

const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authenticated_user'))
  );
  const authService = useAuthServiceContext();
  useEffect(() => authService.setAuthStateObserver(setUser), []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
