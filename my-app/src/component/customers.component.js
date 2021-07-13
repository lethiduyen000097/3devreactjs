import React, { useState, useEffect } from 'react';
import { 
  makeStyles, 
  TableContainer, 
  Switch, 
  FormControlLabel, 
  Checkbox, 
  Table, 
  TableHead, 
  TableBody, 
  TableRow, 
  TableCell, 
  Paper, 
  Button,
  TablePagination
 } from '@material-ui/core';

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
  { id: 1, name: 'ABC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'Sân bay quốc tế Nội Bài – TP. Hà Nội (VVNB/HAN)', status: false},
  { id: 2, name: 'AcC', short_name: 'ADFD', tax_code: 23456, code: 'dfsg', address: 'Sân bay quốc tế Cát Bi – Hải Phòng', status: false},
  { id: 3, name: 'ABb', short_name: 'ADFD', tax_code: 12356, code: 'dfsg', address: 'Sân bay quốc tế Phú Bài – Huế (VVPB/HUI)', status: true},
  { id: 4, name: 'AwC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'Sân bay quốc tế Cam Ranh – Khánh Hòa (VVCR/CXR)', status: true},
  { id: 5, name: 'ABC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'Sân bay quốc tế Đà Nẵng – TP. Đà Nẵng (VVDN/DAD)', status: false},
  { id: 6, name: 'AcC', short_name: 'ADFD', tax_code: 23456, code: 'dfsg', address: 'Sân bay quốc tế Cam Ranh – Khánh Hòa (VVCR/CXR)', status: false},
  { id: 7, name: 'ABb', short_name: 'ADFD', tax_code: 12356, code: 'dfsg', address: 'Sân bay quốc tế Tân Sơn Nhất – TP.HCM (VVTS/SGN)', status: true},
  { id: 8, name: 'AwC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'Sân bay quốc tế Cần Thơ – TP. Cần Thơ (VVCT/VCA)', status: true},
  { id: 9, name: 'ABC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'Sân bay quốc tế Phú Quốc – Kiên Giang (VVPQ/PQC)', status: false},
  { id: 10, name: 'AcC', short_name: 'ADFD', tax_code: 23456, code: 'dfsg', address: 'Sân bay Côn Đảo', status: false},
  { id: 11, name: 'ABb', short_name: 'ADFD', tax_code: 12356, code: 'dfsg', address: 'Sân bay Pleiku – Gia Lai', status: true},
  { id: 12, name: 'AwC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'Sân bay Liên Khương – Đà Lạt', status: true},

  ];
// End sample JSON

const Customers = () => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [dense, setDense] = useState(false);
    const [selected, setSelected] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(function effectFunction(){
      console.log(apiCustomers)
      if (apiCustomers) {
        setCustomers(apiCustomers)
      }
      console.log('State Customer', customers)
    }, []) 

    const handleCheckBoxClick = (row) => {
      let newCustomers = customers.map((el, index)=>(
        el.id !== row.id? el: {...el, status: !el.status}
      ))
      setCustomers(newCustomers)
    }
    const handleBtnDisableClick = () => {
      console.log(selected)
    }

    // const handleRequestSort = (event, property) => {
    //   const isAsc = orderBy === property && order === 'asc';
    //   setOrder(isAsc ? 'desc' : 'asc');
    //   setOrderBy(property);
    // };
  
    // const handleSelectAllClick = (event) => {
    //   if (event.target.checked) {
    //     const newSelecteds = rows.map((n) => n.name);
    //     setSelected(newSelecteds);
    //     return;
    //   }
    //   setSelected([]);
    // };

    const handleClick = (event, id) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
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
        
        onClick={handleBtnDisableClick}
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
            // aria-label="simple table"
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" >ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Shortname</TableCell>
                <TableCell align="center">Tax code</TableCell>
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
                    // aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <TableCell align="center" width="5%">{row.id}</TableCell>
                    <TableCell width="15%">{row.name}</TableCell>
                    <TableCell width="10%" >{row.short_name}</TableCell>
                    <TableCell align="center" width="10%">{row.tax_code}</TableCell>
                    <TableCell align="center" width="10%">{row.code}</TableCell>
                    <TableCell width="40%">{row.address}</TableCell>
                    <TableCell padding="checkbox" align="center" width="10%">
                      <Checkbox
                        checked={row.status}
                        onClick={handleCheckBoxClick.bind(this, row)}
                        inputProps={{ 'aria-labelledby': labelId }}

                      />
                    </TableCell>
                  </TableRow>
                );       
              })}
              {emptyRows > 0 && (
                    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                      <TableCell colSpan={7} />
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