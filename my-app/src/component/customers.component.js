import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
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
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

// Sample JSON return from backend
const apiCustomers = [
  { id: 1, name: 'ABC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'Sân bay quốc tế Nội Bài – TP. Hà Nội (VVNB/HAN)', status: false},
  { id: 2, name: 'AcC', short_name: 'ADFD', tax_code: 23456, code: 'dfsg', address: 'Sân bay quốc tế Cát Bi – Hải Phòng', status: false},
  { id: 3, name: 'ABb', short_name: 'ADFD', tax_code: 12356, code: 'dfsg', address: 'Sân bay quốc tế Phú Bài – Huế (VVPB/HUI)', status: true},
  { id: 4, name: 'AwC', short_name: 'ADFD', tax_code: 13456, code: 'dfsg', address: 'Sân bay quốc tế Cam Ranh – Khánh Hòa (VVCR/CXR)', status: true},

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

  //modal
  // function rand() {
  //   return Math.round(Math.random() * 20) - 10;
  // }

  // function getModalStyle() {
  //   const top = 50 + rand();
  //   const left = 50 + rand();
  
  //   return {
  //     top: `${top}%`,
  //     left: `${left}%`,
  //     transform: `translate(-${top}%, -${left}%)`,
  //   };
  // }

  // const [open, setOpen] = useState(false);
  // const [modalStyle] = useState(getModalStyle);
  // const handleOpen = () => {
  //   setOpen(true);
  //   console.log('openmodal', {body});
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // end modal


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
                    // onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    onClick={handleOpen}
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


// const bodya = () => {
//   return (
//     <>
//     <h1>hhh</h1>
//     </>
//   )
// };
// const body = (
//   <div 
//   style={modalStyle} 
//   className={classes.paper}
//   >
//     <h2 
//     // id="simple-modal-title"
//     >Text in a modal</h2>
//     {/* <p id="simple-modal-description">
//       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//     </p> */}
//     {/* <SimpleModal /> */}
//   </div>
// );
  // End render Table 


//modal
// const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


// end modal






  // Main Render
return (
  <div>
      <h5>Customer table</h5>
      <div style={{ height: 400, width: '100%' }}>
        {_renderGroupButtons()}
        {_renderCustomerTable()}       
      </div>

    

      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Chỉnh sửa thông tin customer</h2>
            
          </div>
        </Fade>
      </Modal>
  </div>
  )
}

export default Customers;