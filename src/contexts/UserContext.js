import React, { createContext, useContext, useEffect, useState } from 'react';
import { useModalHandlersContext } from './ModalHandlersContext';
import { useAuthServiceContext } from './ServiceContext';
import VerificationNotice from 'components/VerificationNotice/VerificationNotice';

const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authenticated_user'))
  );
  const authService = useAuthServiceContext();
  const openModal = useModalHandlersContext().openModal;

  const onUnverified = () =>
    openModal({
      title: 'Unverified Email',
      description: 'Please check your email to enjoy all of our services.',
      content: <VerificationNotice />,
    });
  useEffect(() => authService.setAuthStateObserver(setUser, onUnverified), []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
