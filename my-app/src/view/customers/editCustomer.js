
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Button } from '@material-ui/core';

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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <div>
          <h1>EDIT USER PAGE</h1>
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
            id="shortName-customer"
            label="Short Name"
            onChange={handleShortName}
            value={editCustomer.shortName}
          />

          <TextField
            id="taxCode-customer"
            label="Tax Code"
            onChange={handleTaxCode}
            value={editCustomer.taxCode}
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
      </div>
    </form>
  )
}

export default EditCustomers;