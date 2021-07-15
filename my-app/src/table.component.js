import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Header from "./header.component"
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const groups = ['Fuel', 'Industrial Parts', 'Lubricants', 'Generators', 'Vehicles', 'Packaging']
const customers = ['Petrolimex', 'Penarol', 'Shell', 'Castrol']

const oldUsers = [
  { id: 609, name: 'A', email: 'a@gmail.com', group: groups[1], customer: customers[0], status: false },
  { id: 12, name: 'Tran Van A', email: 'tranvana@gmail.com', group: groups[2], customer: customers[0], status: false },
  { id: 1012, name: '@crisp', email: 'crispwastaken@gmail.com', group: groups[3], customer: customers[2], status: false },
  { id: 402, name: 'turgid123', email: 'turgid123@gmail.com', group: groups[4], customer: customers[1], status: false },
  { id: 798, name: 'DDDDD', email: 'xdddddd42@gmail.com', group: groups[5], customer: customers[3], status: false }
];

const TableComponent = () => {

  const [users, setUsers] = useState([])

  useEffect(function effectFunction() {
    console.log(oldUsers)
    if (oldUsers) {
      setUsers(oldUsers)
    }
    console.log('Current User State', users)
  }, [])


  const handleCheck = (e, row) => {
    // e.stopPropagation()
    // e.nativeEvent.stopImmediatePropagation();
    console.log(row)
    let newUsers = users.map((el) => (
      el.id !== row.id ? el : { ...el, status: !el.status }
    ))
    setUsers(newUsers)
    console.log('New User State', newUsers)
  }

  const handleDeleteButtonClick = () => {

    const getCheckedUsers = (ele1) => {
      if (ele1.status === true) {
        return [ele1.id, ele1.status]
      }
      return null
    }
    const delUsers = users.map(getCheckedUsers).filter((ele2) => {
      return ele2 != null;
    })

    console.log('Del User State 1', delUsers)

  }


  const history = useHistory();


  const handleEditRoute = (row) => {
    history.push({
      pathname: '/edituser',
      state: row,
    });
  }

  const classes = useStyles();

  return (
    <div>
      <Header />
      <TableContainer component={Paper}>
        <Table className={classes.table} size='small' aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID </TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Group</TableCell>
              <TableCell align="center">Customer</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow key={row.id} selected={row.status} onClick={handleEditRoute.bind(this, row)}>
                <TableCell align="center" component="th" scope="row">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center" >{row.group} </TableCell>
                <TableCell align="center">{row.customer}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  <Checkbox
                    onChange={(e) => {handleCheck(e, row);}}
                    checked={row.status}
                  />
                </TableCell>
              </TableRow>
            )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Button color='primary' variant='outlined' onClick={handleDeleteButtonClick}>Delete</Button>

    </div>
  );
}

export default TableComponent