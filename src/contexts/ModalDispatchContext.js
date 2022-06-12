import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { modalReducer } from 'reducers/modalReducer';
import CustomModal from 'components/CustomModal';

const initialState = {
  open: false,
  title: null,
  description: null,
  content: null,
};

const ModalDispatchContext = createContext(() => {});
export const useModalDispatchContext = () => useContext(ModalDispatchContext);

const ModalDispatchProvider = ({ children }) => {
  const [modal, modalDispatch] = useReducer(modalReducer, initialState);
  const onClose = () => modalDispatch({ type: 'CLOSE' });

  const location = useLocation();
  useEffect(onClose, [location]);

  return (
    <ModalDispatchContext.Provider value={modalDispatch}>
      {children}
      <CustomModal
        open={modal.open}
        onClose={onClose}
        title={modal.title}
        description={modal.description}
        content={modal.content}
      ></CustomModal>
    </ModalDispatchContext.Provider>
  );
};

export default ModalDispatchProvider;
