import React, { createContext, useContext } from 'react';
import ConcertService from 'service/ticketmaster';
import AuthService from 'service/firebase/authentication';

const concertService = new ConcertService();
const authService = new AuthService();

const services = {
  concert: concertService,
  auth: authService,
};

const ServiceContext = createContext(services);
export const useServiceContext = () => useContext(ServiceContext);

const ServiceProvider = ({ children }) => (
  <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>
);

export default ServiceProvider;
