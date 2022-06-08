import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';

const GuestOnly = ({ children }) => {
  const user = useUserContext();
  return user ? <Navigate to="/" replace /> : children;
};

export default GuestOnly;
