import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CustomModal from 'components/CustomModal/CustomModal';

const initialState = {
  open: false,
  title: null,
  description: null,
  content: null,
};

const ModalHandlersContext = createContext(initialState);
export const useModalHandlersContext = () => useContext(ModalHandlersContext);

const ModalHandlersProvider = ({ children }) => {
  const [modal, setModal] = useState(initialState);
  const handlers = {
    openModal: payload => setModal({ open: true, ...payload }),
    closeModal: () => setModal(initialState),
  };

  const location = useLocation();
  useEffect(handlers.closeModal, [location]);

  return (
    <ModalHandlersContext.Provider value={handlers}>
      {children}
      <CustomModal
        open={modal.open}
        onClose={handlers.closeModal}
        title={modal.title}
        description={modal.description}
        content={modal.content}
      ></CustomModal>
    </ModalHandlersContext.Provider>
  );
};

export default ModalHandlersProvider;
