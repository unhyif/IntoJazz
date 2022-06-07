import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CustomModal from 'components/customModal/CustomModal';

const initialState = {
  open: false,
  title: null,
  description: null,
  content: null,
};

const ModalHandlersContext = React.createContext(initialState);
export const useModalHandlersContext = () => useContext(ModalHandlersContext);

const ModalHandlersProvider = ({ children }) => {
  const [modal, setModal] = useState(initialState);
  const handlers = {
    openModal: setModal,
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
