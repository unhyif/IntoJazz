import React, { createContext, useContext, useEffect, useState } from 'react';
import { useModalDispatchContext } from './ModalDispatchContext';
import { useServiceContext } from './ServiceContext';
import Notice from 'components/Notice/Notice';

const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authenticated_user'))
  );
  const authService = useServiceContext().auth;

  const modalDispatch = useModalDispatchContext();
  const onUnverified = () =>
    modalDispatch({
      type: 'OPEN',
      payload: {
        title: 'Unverified Email',
        description: 'Please check your email to enjoy all of our services.',
        content: (
          <Notice>
            Your email address has not been verified yet.
            <br />
            Please check your email to enjoy all of our services.
          </Notice>
        ),
      },
    });
  useEffect(() => authService.setAuthStateObserver(setUser, onUnverified), []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
