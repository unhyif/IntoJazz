import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
// import { Dialog, DialogContent } from '@mui/material';
// import { Fade } from '@mui/material';

// import { useSpring, animated } from 'react-spring';
// const Fade = ({ children, open }) => {
//   const transition = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     // from: { opacity: open ? 0 : 1 },
//     // to: { opacity: open ? 1 : 0 },
//   });

//   return <animated.div style={transition}>{children}</animated.div>;
// };

const boxStyle = {
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
    <Box sx={boxStyle}>
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
