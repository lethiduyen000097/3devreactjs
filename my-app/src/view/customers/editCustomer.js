
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Button, Modal, Backdrop, Fade  } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const EditCustomers = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(5),
        width: '50ch',
      },
    },
  }));
  const classes = useStyles()
  const [editCustomer, setEditCustomer] = useState([{ id: '', name: '', short_name: '', tax_code: '', code: '',address: '',status: '', }])
  const location = useLocation()

  useEffect(() => {
    console.log('is it here?', location.state)
    if (location.state) {
        setEditCustomer(location.state)
    }
  }, [location])

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleId = (e) => {
    setEditCustomer({ ...editCustomer, id: e.target.value })
  }
  const handleName = (e) => {
    setEditCustomer({ ...editCustomer, name: e.target.value })
  }
  const handleShort = (e) => {
    setEditCustomer({ ...editCustomer, short_name: e.target.value })
  }
  const handleTax = (e) => {
    setEditCustomer({ ...editCustomer, tax_code: e.target.value })
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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <div>
          <h1>EDIT USERR PAGE</h1>
          <TextField
            id="id-customer"
            label="ID"
            onChange={handleId}
            value={editCustomer.id}
          />
          <TextField
            id="name-customer"
            label="Name"
            onChange={handleName}
            value={editCustomer.name}
          />
          
          <TextField
            id="short-customer"
            label="Short Name"
            onChange={handleShort}
            value={editCustomer.short_name}
          />

          <TextField
            id="tax-customer"
            label="Tax Code"
            onChange={handleTax}
            value={editCustomer.tax_code}
          />

          <TextField
            id="code-customer"
            label="Code"
            onChange={handleCode}
            value={editCustomer.code}
          />
          <TextField
            id="address-customer"
            label="Address"
            onChange={handleAddress}
            value={editCustomer.address}
          />
          <TextField
            id="status-customer"
            label="Status"
            onChange={handleStatus}
            value={editCustomer.status}
          />
        </div>
        <Button color='primary' variant='outlined' onClick={handleClick}>UPDATE</Button>

        {/* <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  cccc
</Modal> */}
      </div>
    </form>
    // <Modal
    //   className={classes.modal}
    //   open={open}
    //   onClose={handleClose}
    //   closeAfterTransition
    //   BackdropComponent={Backdrop}
    //   width="100%"
    //   BackdropProps={{
    //     timeout: 500,
    //   }}
    // >
    //   <Fade in={open}>
    //     <div className={classes.paper}>
    //       <h2 id="transition-modal-title">EDIT INFORMATION CUSTOMER </h2>

    //       <div className="row">
    //         <div className="col-12">
    //           <TextField
    //             id="id-customer"
    //             label="ID"
    //             onChange={handleId}
    //             value={editCustomer.id}
    //           />
    //         </div>
    //       </div>

    //       <div className="row">
    //         <div className="col-12">
    //           <TextField
    //             id="name-customer"
    //             label="Name"
    //             onChange={handleName}
    //             value={editCustomer.name}
    //           />
    //         </div>
    //       </div>

    //       <div className="row">
    //         <div className="col-12">
    //           <TextField
    //             id="shortName-customer"
    //             label="Short Name"
    //             onChange={handleShortName}
    //             value={editCustomer.shortName}
    //           />
    //         </div>
    //       </div>

    //       <div className="row">
    //         <div className="col-12">
    //           <TextField
    //             id="taxCode-customer"
    //             label="Tax Code"
    //             onChange={handleTaxCode}
    //             value={editCustomer.taxCode}
    //           />
    //         </div>
    //       </div>

    //       <div className="row">
    //         <div className="col-12">
    //           <TextField
    //             id="code-customer"
    //             label="Code"
    //             onChange={handleCode}
    //             value={editCustomer.code}
    //           />
    //         </div>
    //       </div>

    //       <div className="row">
    //         <div className="col-12">
    //           <TextField
    //             id="address-customer"
    //             label="Address"
    //             onChange={handleAddress}
    //             value={editCustomer.address}
    //           />
    //         </div>
    //       </div>

    //       <div className="row">
    //         <div className="col-12">
    //           <TextField
    //             id="status-customer"
    //             label="Status"
    //             onChange={handleStatus}
    //             value={editCustomer.status}
    //           />
    //         </div>
    //       </div>

    //       <Button color='primary' variant='outlined' onClick={handleClick}>UPDATE</Button>

    //       <div className="row">
    //         <div className="col-12">
    //         <Button>
    //           Cancel
    //         </Button>
    //         <Button
    //           variant="contained"
    //           color="primary"
    //           size="small"
    //           className={classes.button}
    //           startIcon={<SaveIcon />}
    //         >
    //           Save
    //         </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </Fade>
    // </Modal>
  )
}

export default EditCustomers;