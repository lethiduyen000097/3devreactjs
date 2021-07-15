// import React from 'react';

// const Customers = () => {
//     return (
//         <>
//         <h3>Customer</h3>
//         </>
//     )
// }

// export default Customers;

import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const Customers = () => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [shortName, setShortName] = useState('')
  const [taxCode, setTaxCode] = useState('')
  const [code, setCode] = useState('')
  const [address, setAddress] = useState('')
  const [status, setStatus] = useState('')

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(5),
        width: '50ch',
      },
    },
  }));

  const classes = useStyles()

  const handleID = (e) => {
    setId(e.target.value)
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleShortName = (e) => {
    setShortName(e.target.value)
  }

  const handleTaxCode = (e) => {
    setTaxCode(e.target.value)
  }

  const handleCode = (e) => {
    setCode(e.target.value)
  }

  const handleAddress = (e) => {
    setAddress(e.target.value)
  }

  const handleStatus = (e) => {
    setStatus(e.target.value)
  }

  return (
  <form className={classes.root} noValidate autoComplete="off">
  <div>
    <h1>CREATE CUSTOMER</h1>

    
    <TextField 
      id ="id-customer"
      label="ID"
      onChange = {handleID}
    />
    <TextField 
      id ="name-customer"
      label="Name"
      onChange = {handleName}
    />
    <TextField 
      id ="shortName-customer"
      label="IDShortName"
      onChange = {handleShortName}
    />
    <TextField 
      id ="taxCode-customer"
      label="TaxCode"
      onChange = {handleTaxCode}
    />
    <TextField 
      id ="code-customer"
      label="Code"
      onChange = {handleCode}
    />
    <TextField 
      id ="address-customer"
      label="Address"
      onChange = {handleAddress}
    />
    <TextField 
      id ="status-customer"
      label="Status"
      onChange = {handleStatus}
    />
  
  <p>User Details:</p>
  <p>ID:   {id}</p>
  <p>Name:   {name}</p>
  <p>Short Name:   {shortName}</p>
  <p>Tax-code:   {taxCode}</p>
  <p>Code:   {code}</p>
  <p>Address:   {address}</p>
  <p>Status:   {status}</p>

  </div>
  </form>
  )  
};

export default Customers;