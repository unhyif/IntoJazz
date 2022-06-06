import React, { useContext, useEffect, useRef, useState } from 'react';
import { useAuthServiceContext } from './ServiceContext';

const UserContext = React.createContext(null);
export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authService = useRef(useAuthServiceContext());
  useEffect(() => authService.current.setAuthStateObserver(setUser), []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
