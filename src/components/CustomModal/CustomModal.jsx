import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Fade } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './CustomModal.module.scss';
// import { Dialog, DialogContent } from '@mui/material';

const cn = classNames.bind(styles);

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40rem',
  backgroundColor: 'white',
  borderRadius: 3,
  p: 3,
};

const CustomModal = ({ title, description, content, open, onClose }) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal__title"
    aria-describedby={description}
    BackdropProps={{ sx: { backgroundColor: 'rgba(0,0,0,0.2)' } }}
  >
    <Fade in={open} timeout={{ enter: 500, exit: 0 }}>
      <Box sx={boxStyle}>
        <header className={cn('header')}>
          <button
            aria-label="close"
            className={cn('closeBtn')}
            onClick={onClose}
          >
            &times;
          </button>
        </header>

        <h1 id="modal__title" className={cn('title')}>
          {title}
        </h1>
        {content}
      </Box>
    </Fade>
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
