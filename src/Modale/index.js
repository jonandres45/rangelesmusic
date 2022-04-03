import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Context} from '../Context';
import './Modal.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#585858',
    border:'0px',
    color:'white',
    boxShadow: 24,
    p: 4,
  };

function Modale(props){
    const {toggleModal, setToggleModal} = React.useContext(Context);
    const handleClose = () => setToggleModal(false);

    return (
        <div>
        <Modal
            open={toggleModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {props.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {props.children}
            </Typography>
            </Box>
        </Modal>
        </div>
    );
}

export {Modale};