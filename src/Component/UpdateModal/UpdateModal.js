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
  maxWidth: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ user, handleClose }) => {
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
          <nav className="NavBar navbar bg-body-tertiary">
            <div className="container-fluid">
              <h2>Update Profile</h2>
              <CloseIcon className="close-icon" onClick={handleCloseModal} />
            </div>
          </nav>
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="inputImageLink" className="form-label">
                Image Link
              </label>
              <input type="text" className="form-control" id="inputAddress" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Description
              </label>
              <input type="text" className="form-control" id="inputAddress" />
            </div>
            <footer className="footer">
              <button type="submit" className="update btn btn-primary">
                Update Profile
              </button>
            </footer>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
