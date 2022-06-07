import React, { useContext, useEffect, useState } from 'react';
import { useAuthServiceContext } from './ServiceContext';

const UserContext = React.createContext(null);
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const authService = useAuthServiceContext();
  useEffect(() => authService.setAuthStateObserver(setUser), []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
