import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BasicModal from '../UpdateModal/UpdateModal';
import DeleteModal from "../DeteleModal/DeleteModal";


const ITEM_HEIGHT = 48;

export default function LongMenu({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);


  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    handleClose(); // Close the menu after opening the modal
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
    handleClose(); // Close the menu after opening the modal
  };
  const closeDeleteModal = () => {
    setOpenDeleteModal(false);
  };
    
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
       <MenuItem onClick={handleOpenModal}>Update</MenuItem>
      <MenuItem onClick={handleOpenDeleteModal}>Delete</MenuItem>
    </Menu>
    {openModal && (
      <BasicModal user={user} handleClose={closeModal} />
    )}
    {openDeleteModal && (
      <DeleteModal user={user} handleClose={closeDeleteModal} />
    )}
    </div>
  );
}



