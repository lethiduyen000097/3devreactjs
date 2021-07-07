import React, { useState } from 'react';
import { makeStyles, TableContainer, Checkbox, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    table: {
      minWidth: 650,
    },
}));

// Sample JSON return from backend
const apiCustomers = [
  { id: 1, name: 'ABC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'dfdghjkl', status: true},
  { id: 2, name: 'AcC', short_name: 'ADFD', tax_code: 23456, code: 'dfsg', address: 'sdsdsfdghjkl', status: false},
  { id: 3, name: 'ABb', short_name: 'ADFD', tax_code: 12356, code: 'dfsg', address: 'dhjkl', status: true}
  ];
// End sample JSON

const Customers = () => {
    const classes = useStyles();

    const [customers, setCustomer] = useState(null);

    const handleClickCheckboxInRow = (row) =>{
      console.log(row)
    }
    
    //render Group Buttons for Component 
    const _renderGroupButtons = () => {

      return (
      <div className={classes.root}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => setCustomer(customers - 1)}
        >
          Enable
        </Button>
        <Button variant="contained" disabled>
          Disable
        </Button>
      </div>
    );
  }
  // End function render Group Buttons

  // render Table to display invoices
  const _renderCustomerTable = () => {
    return (
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Shortname</TableCell>
            <TableCell align="center">Tip code</TableCell>
            <TableCell align="center">Code</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apiCustomers.map((apiCustomers) => (
            <TableRow key={apiCustomers.name}>
              <TableCell align="center">{apiCustomers.id}</TableCell>
              <TableCell align="center">{apiCustomers.name}</TableCell>
              <TableCell align="center">{apiCustomers.short_name}</TableCell>
              <TableCell align="center">{apiCustomers.tax_code}</TableCell>
              <TableCell align="center">{apiCustomers.code}</TableCell>
              <TableCell align="center">{apiCustomers.address}</TableCell>
              <TableCell padding="checkbox" align="center">
                <Checkbox
                  checked={apiCustomers.status}
                  onClick = {handleClickCheckboxInRow.bind(this, apiCustomers)}
                />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
  }
  // End render Table 

  // Main Render
    return (
        <div>
            <h5>Customer table</h5>
            <div style={{ height: 400, width: '100%' }}>
              {_renderGroupButtons()}
              {_renderCustomerTable()}           
            </div>
        </div>
    )
}

export default Customers;