import React, { useState } from 'react';
import './Header.css';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import PersonAddAltRounded from '@mui/icons-material/PersonAddAltRounded';
import BasicModal from '../CreateModal/CreateModal';

const Header = ({ onModeChange }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleHorizontalMode = () => {
    onModeChange('table');
  };

  const handleVerticalMode = () => {
    onModeChange('card');
  };

  const handleCreateProfile = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  return (
    <div className='header-container'>
      <div className='content'>
        <input className='input' placeholder='Search' />
        <button className='btn btn-primary' onClick={handleCreateProfile}>
          <PersonAddAltRounded className='person' /> Create Profile
        </button>
        <div className='mode-buttons'>
          <button className='mode-button' onClick={handleVerticalMode}>
            <VerticalSplitIcon className='mode-icon' />
          </button>
          <button className='mode-button' onClick={handleHorizontalMode}>
            <HorizontalSplitIcon className='mode-icon' />
          </button>
        </div>
      </div>
      {showCreateModal && <BasicModal handleClose={handleCloseCreateModal} />}
    </div>
  );
};

export default Header;
