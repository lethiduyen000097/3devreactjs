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
    const [selected, setSelected] = React.useState([]);


    const handleClickCheckboxInRow = (row) =>{

      console.log(row);

     
    }

    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      setSelected(newSelected);
    };



 
    //render Group Buttons for Component 
    const _renderGroupButtons = () => {

      return (
      <div className={classes.root}>
        <Button 
          variant="contained" 
          color="primary" 
        >
          Enable
        </Button>
        <Button 
        variant="contained"
        >
          Disable
        </Button>
      </div>
    );
  }
  // End function render Group Buttons


  const isSelected = (name) => selected.indexOf(name) !== -1;
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
          {apiCustomers.map((apiCustomers, index) => {
            const isItemSelected = isSelected(apiCustomers.name);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
<TableRow 
            hover
            onClick={(event) => handleClick(event, apiCustomers.name)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={apiCustomers.name}
            selected={isItemSelected}

            // key={apiCustomers.name}
            // role="checkbox"
            // onClick={(event) => handleClick(event, apiCustomers.name)}

            >
              <TableCell align="center">{apiCustomers.id}</TableCell>
              <TableCell align="center">{apiCustomers.name}</TableCell>
              <TableCell align="center">{apiCustomers.short_name}</TableCell>
              <TableCell align="center">{apiCustomers.tax_code}</TableCell>
              <TableCell align="center">{apiCustomers.code}</TableCell>
              <TableCell align="center">{apiCustomers.address}</TableCell>
              <TableCell padding="checkbox" align="center">
                <Checkbox
                  checked={isItemSelected}
                  inputProps={{ 'aria-labelledby': labelId }}
                  // checked={apiCustomers.status}
                  // onClick = {handleClickCheckboxInRow.bind(this, apiCustomers)}
                />
                </TableCell>
            </TableRow>
            );
            
})}
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