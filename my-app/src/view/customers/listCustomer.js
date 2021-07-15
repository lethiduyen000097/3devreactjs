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
  TablePagination,
  Modal,
  Backdrop,
  Fade,
  TextField
 } from '@material-ui/core';
 import { useLocation } from 'react-router';
 import { useHistory } from "react-router-dom";
 import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    table: {
      minWidth: 650,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
    },
}));


// End sample JSON

const ListCustomers = () => {
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

 

  // const handleClick = (event, id) => {
  //   const selectedIndex = selected.indexOf(id);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, id);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1),
  //     );
  //   }
  //   setSelected(newSelected);
  // };

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

    //modal
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();


  const handleEditRoute = (row) => {
    
    history.push({
      pathname: '/edit-customer',
      state: row,
    });
  }
  

  // Sample JSON return from backend
  const apiCustomers = [
    { id: 1, name: 'ABC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'Sân bay quốc tế Nội Bài – TP. Hà Nội (VVNB/HAN)', status: false},
    { id: 2, name: 'AcC', short_name: 'AcC', tax_code: 13457, code: 'dfsg', address: 'Sân bay quốc tế Cát Bi – Hải Phòng', status: false},
    { id: 3, name: 'ABb', short_name: 'ADFD', tax_code: 12356, code: 'dfsg', address: 'Sân bay quốc tế Phú Bài – Huế (VVPB/HUI)', status: true},
    { id: 4, name: 'AwC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'Sân bay quốc tế Cam Ranh – Khánh Hòa (VVCR/CXR)', status: true},

    ];
    const isSelected = (name) => selected.indexOf(name) !== -1;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, apiCustomers.length - page * rowsPerPage);

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
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    // onClick={handleOpen}
                    onClick={handleEditRoute.bind(this, row)}
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

const _modalEditCustomer = () => {
  const [editCustomer, setEditCustomer] = useState([{ id: '', name: '', shortName: '', taxCode: '', code: '',address: '',status: '', }])
  const location = useLocation()
  
  useEffect(() => {
    console.log('is it here?', location.state)
    if (location.state) {
        setEditCustomer(location.state)
    }
  }, [location])

  const handleId = (e) => {
    setEditCustomer({ ...editCustomer, id: e.target.value })
  }
  const handleName = (e) => {
    setEditCustomer({ ...editCustomer, name: e.target.value })
  }
  const handleShortName = (e) => {
    setEditCustomer({ ...editCustomer, shortName: e.target.value })
  }
  const handleTaxCode = (e) => {
    setEditCustomer({ ...editCustomer, taxCode: e.target.value })
  }
  const handleCode = (e) => {
    setEditCustomer({ ...editCustomer, code: e.target.value })
  }
  const handleAddress = (e) => {
    setEditCustomer({ ...editCustomer, address: e.target.value })
  }
  const handleStatus = (e) => {
    setEditCustomer({ ...editCustomer, status: e.target.value })
  }

  const handleClick = () => {
    console.log(editCustomer)
  }
  return(
   <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      width="100%"
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">EDIT INFORMATION CUSTOMER </h2>

          <div className="row">
            <div className="col-12">
              <TextField
                id="id-customer"
                label="ID"
                onChange={handleId}
                value={editCustomer.id}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <TextField
                id="name-customer"
                label="Name"
                onChange={handleName}
                value={editCustomer.name}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <TextField
                id="shortName-customer"
                label="Short Name"
                onChange={handleShortName}
                value={editCustomer.shortName}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <TextField
                id="taxCode-customer"
                label="Tax Code"
                onChange={handleTaxCode}
                value={editCustomer.taxCode}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <TextField
                id="code-customer"
                label="Code"
                onChange={handleCode}
                value={editCustomer.code}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <TextField
                id="address-customer"
                label="Address"
                onChange={handleAddress}
                value={editCustomer.address}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <TextField
                id="status-customer"
                label="Status"
                onChange={handleStatus}
                value={editCustomer.status}
              />
            </div>
          </div>

          <Button color='primary' variant='outlined' onClick={handleClick}>UPDATE</Button>

          <div className="row">
            <div className="col-12">
            <Button>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  )
}

  // Main Render
return (
  <div>
      <h5>Customer table</h5>
      <div style={{ height: 400, width: '100%' }}>
        {_renderGroupButtons()}
        {_modalEditCustomer()} 
        {_renderCustomerTable()}    
          
      </div>
  </div>
  )
}

export default ListCustomers;