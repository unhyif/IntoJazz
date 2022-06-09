import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
// import { Dialog, DialogContent } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '500px',
  backgroundColor: 'white',
  borderRadius: 3,
  p: 5,
};

const CustomModal = ({ title, description, content, open, onClose }) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="title"
    aria-describedby={description}
    BackdropProps={{ sx: { backgroundColor: 'rgba(0,0,0,0.2)' } }}
  >
    <Box sx={style}>
      <header>
        <h1 id="title">{title}</h1>
        <button onClick={onClose} aria-label="close">
          &times;
        </button>
      </header>
      {content}
    </Box>
  </Modal>
);

export default CustomModal;

// const Modal = ({ title, description, content, ...others }) => (
//   <Dialog
//     {...others}
//     aria-labelledby={title}
//     aria-describedby={description}
//     sx={{ '& .MuiDialog-paper': { padding: '2em' } }}
//   >
//     {content}
//   </Dialog>
// );

// export default Modal;
