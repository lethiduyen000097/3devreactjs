import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
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
  { id: 1, name: 'ABC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'dfdghjkl', status: true},
  { id: 2, name: 'AcC', short_name: 'ADFD', tax_code: 23456, code: 'dfsg', address: 'sdsdsfdghjkl', status: false},
  { id: 3, name: 'ABb', short_name: 'ADFD', tax_code: 12356, code: 'dfsg', address: 'dhjkl', status: true},
  { id: 4, name: 'AwC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'dfdghjkl', status: true},
  { id: 5, name: 'ArC', short_name: 'ADFD', tax_code: 23456, code: 'dfsg', address: 'sdsdsfdghjkl', status: false},
  { id: 6, name: 'Arb', short_name: 'ADFD', tax_code: 12356, code: 'dfsg', address: 'dhjkl', status: true},
  { id: 7, name: 'AyC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'dfdghjkl', status: true},
  { id: 8, name: 'AuC', short_name: 'ADFD', tax_code: 23456, code: 'dfsg', address: 'sdsdsfdghjkl', status: false},
  { id: 9, name: 'Aib', short_name: 'ADFD', tax_code: 12356, code: 'dfsg', address: 'dhjkl', status: true},
  { id: 10, name: 'AvC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'dfdghjkl', status: true},
  { id: 11, name: 'AbC', short_name: 'ADFD', tax_code: 23456, code: 'dfsg', address: 'sdsdsfdghjkl', status: false},
  { id: 12, name: 'Anb', short_name: 'ADFD', tax_code: 12356, code: 'dfsg', address: 'dhjkl', status: true},
  { id: 13, name: 'AmC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'dfdghjkl', status: true},
  { id: 14, name: 'AqC', short_name: 'ADFD', tax_code: 23456, code: 'dfsg', address: 'sdsdsfdghjkl', status: false},
  { id: 15, name: 'Alb', short_name: 'ADFD', tax_code: 12356, code: 'dfsg', address: 'dhjkl', status: true}
  ];
// End sample JSON

const Customers = () => {
    const classes = useStyles();

    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [dense, setDense] = React.useState(false);

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

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const handleChangeDense = (event) => {
      setDense(event.target.checked);
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
        disabled
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
              {apiCustomers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((apiCustomers, index) => {
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={apiCustomers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
      control={<Switch checked={dense} onChange={handleChangeDense} />}
      label="Dense padding"
    />
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