import React from 'react';
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
const rows = [
  { id: 1, name: 'ABC', short_name: 'ADFD', tax_code: 123456, code: 'dfsg', address: 'dfdghjkl', status: true}
  ];
// End sample JSON


const Customers = () => {
    const classes = useStyles();
    
    //render Group Buttons for Component 
    const _renderGroupButtons = () => {

      return (
        
      <div className={classes.root}>
        <Button variant="contained" color="primary">
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.short_name}</TableCell>
              <TableCell align="center">{row.tax_code}</TableCell>
              <TableCell align="center">{row.code}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell padding="checkbox" align="center">
                <Checkbox
                          // checked={isItemSelected}
                          // inputProps={{ 'aria-labelledby': labelId }}
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