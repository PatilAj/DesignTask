import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from '@mui/icons-material/Close';
import '../UpdateModal/Modal.css';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '90%',
  maxWidth: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ handleClose }) => {
  const [open, setOpen] = React.useState(true);

  const handleCloseModal = () => {
    setOpen(false);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <nav className="Nav navbar bg-body-tertiary">
            <div className="container-fluid">
              <h2>Remove Profile</h2>
              <CloseIcon className="close-icon" onClick={handleCloseModal} />
            </div>
          </nav>
          <div>
            <p>Removed profile will be deleted permanently and won’t be available anymore.</p>
          </div>
          <footer className="Footer">
            <button type="submit" className="Cancel btn btn-primary">
              Cancel
            </button>
            <button type="submit" className="Delete btn btn-danger">
              Delete
            </button>
          </footer>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
