import React, { useState } from 'react';
import './Home.css';
import { Navbar } from '../Navbar/Navbar';
import Header from '../Header/Header';
import CardView from '../CardView/CardView';
import TableView from '../TableView/TableView';

export const Home = () => {
  const [mode, setMode] = useState('table'); // Initial mode is set to 'card'

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className='HomeContainer'>
      <Navbar />
      <Header onModeChange={handleModeChange} />
      {mode === 'table' ? <TableView /> : <CardView /> }
    </div>
  );
};
