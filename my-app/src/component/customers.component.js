import React, { useState, useEffect } from 'react';
import { makeStyles, TableContainer, Switch, FormControlLabel, Checkbox, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@material-ui/core';


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
  { id: 1, name: 'ABC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'dfdghjkl', status: false},
  { id: 2, name: 'AcC', short_name: 'ADFD', tax_code: 23456, code: 'dfsg', address: 'sdsdsfdghjkl', status: false},
  { id: 3, name: 'ABb', short_name: 'ADFD', tax_code: 12356, code: 'dfsg', address: 'dhjkl', status: true},
  { id: 4, name: 'AwC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'dfdghjkl', status: true},

  ];
// End sample JSON

const Customers = () => {
    const classes = useStyles();

    // const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [dense, setDense] = React.useState(false);
    const [selected, setSelected] = React.useState([]);

    const [customers, setCustomers] = useState([]);
    const [newCustomers, setStatusCustomers] = useState([])

    useEffect(function effectFunction(){
      console.log(apiCustomers)
      if (apiCustomers) {
        setCustomers(apiCustomers)
      }
      console.log('State Customer', customers)
    }, []) 

    const handleCheckBoxClick = (row) => {
      // console.log(row)
      let newCustomers = customers.map((el, index)=>(
        el.id !== row.id? el: {...el, status: !el.status}
      ))
      setCustomers(newCustomers)
      console.log(customers)
      console.log(newCustomers)
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

      console.log('nono', newSelected)
    };
    
    const EnableClick = (row) => {
      console.log(customers)
     let newStatusCustomers = customers.map((el, index)=>(
       el.id !== row.id? el: {...el}
      
     ))
     setStatusCustomers(newStatusCustomers)
      
      // console.log(newCustomers)
    }

    // const handleChangePage = (event, newPage) => {
    //   setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (event) => {
    //   setRowsPerPage(parseInt(event.target.value, 10));
    //   setPage(0);
    // };

    // const handleChangeDense = (event) => {
    //   setDense(event.target.checked);
    // };

    //render Group Buttons for Component 
    const _renderGroupButtons = () => {

      return (
      <div className={classes.root}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={EnableClick}
          // onClick={(event) => handleClickEnable(event, apiCustomers.name)}
        >
          Enable
        </Button>
        <Button 
        variant="contained"
        
        onClick={handleClick}
        // onClick={(event) => handleClickDisable(event, apiCustomers.name)}
        >
          Disable
        </Button>
      </div>
    );
  }
  // End function render Group Buttons


  const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, apiCustomers.length - page * rowsPerPage);
  // render Table to display invoices
  const _renderCustomerTable = () => {
    return (
      <div className={classes.table}>
        <Paper className={classes.paper}>
        <TableContainer component={Paper}>
          <Table 
            className={classes.table} 
            aria-label="simple table"
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
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
              {customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (  
                  <TableRow 
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.short_name}</TableCell>
                    <TableCell align="center">{row.tax_code}</TableCell>
                    <TableCell align="center">{row.code}</TableCell>
                    <TableCell align="center">{row.address}</TableCell>
                    <TableCell padding="checkbox" align="center">
                      <Checkbox
                        checked={row.status}
                        // checked={isItemSelected}
                        onClick={handleCheckBoxClick.bind(this, row)}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                  </TableRow>
                );       
              })}
              {emptyRows > 0 && (
                    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={apiCustomers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
      {/* <FormControlLabel
      control={<Switch checked={dense} onChange={handleChangeDense} />}
      label="Dense padding"
    /> */}
    </div>
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