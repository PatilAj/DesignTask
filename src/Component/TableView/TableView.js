import React, { useState, useEffect } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import data from "../Users.json";
import SettingsRounded from '@mui/icons-material/SettingsRounded';
import BasicModal from '../UpdateModal/UpdateModal';
import DeleteModal from '../DeteleModal/DeleteModal' 
import LongMenu from '../MoreOver/MoreOver';
import './TableView.css';

const TableView = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); 
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setUsers(data.data.getAllProfiles.profiles);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Description</TableCell>
              <TableCell><SettingsRounded/></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : users
            ).map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="user-info">
                    <img src={user.image_url} alt={user.first_name} className="user-image" />
                    <div className="user-name">{user.first_name} {user.last_name}</div>
                  </div>
                </TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.description}</TableCell>
                <TableCell>
                  <LongMenu user={user} onOpenModal={handleOpenModal} />
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      {selectedUser && openModal && (
        <BasicModal user={selectedUser} handleClose={handleCloseModal} />
      )}
      {selectedUser && openModal && (
  <DeleteModal user={selectedUser} handleClose={handleCloseModal}/>
)}
    </div>
  );
};

export default TableView;
