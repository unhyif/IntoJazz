import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '500px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 5,
};

const CustomModal = ({ title, description, content, ...others }) => (
  <Modal {...others} aria-labelledby={title} aria-describedby={description}>
    <Box sx={style}>{content}</Box>
  </Modal>
);

export default CustomModal;
