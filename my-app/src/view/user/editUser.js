import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Button } from '@material-ui/core';



const EditUser = () => {
  const [editUsers, setEditUsers] = useState([{ name: '', email: '', group: '', customer: '' }])
  const location = useLocation()

  useEffect(() => {
    console.log('is it here?', location.state)
    if (location.state) {
      setEditUsers(location.state)
    }
  }, [location])

  // console.log('Edit Users Info', editUsers)


  const groups = [
    {
      value: 'Fuel',
      label: 'Fuel',
    },
    {
      value: 'Industrial Parts',
      label: 'Industrial Parts',
    },
    {
      value: 'Lubricants',
      label: 'Lubricants',
    },
    {
      value: 'Generators',
      label: 'Generators',
    },
    {
      value: 'Vehicles',
      label: 'Vehicles',
    },
    {
      value: 'Packaging',
      label: 'Packaging',
    }
  ];

  const customers = [
    {
      value: 'Petrolimex',
      label: 'Petrolimex',
    },
    {
      value: 'Penarol',
      label: 'Penarol',
    },
    {
      value: 'Shell',
      label: 'Shell',
    },
    {
      value: 'Castrol',
      label: 'Castrol',
    }
  ];

  const handleName = (e) => {
    setEditUsers({ ...editUsers, name: e.target.value })
  }

  const handleEmail = (e) => {
    setEditUsers({ ...editUsers, email: e.target.value })
  }

  const handleGroup = (e) => {
    setEditUsers({ ...editUsers, group: e.target.value })
  }

  const handleCustomer = (e) => {
    setEditUsers({ ...editUsers, customer: e.target.value })
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(5),
        width: '50ch',
      },
    },
  }));

  const handleClick = () => {
    console.log(editUsers)
  }

  const classes = useStyles()

  return (

    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <div>
          <h1>EDIT USER PAGE</h1>
          <TextField
            id="name-basic"
            label="Name"
            onChange={handleName}
            value={editUsers.name}
          />
          <TextField
            id="email-basic"
            label="Email"
            // type='email'
            onChange={handleEmail}
            value={editUsers.email}
          />
          <TextField
            id="standard-select-group"
            select
            label="Group"
            onChange={handleGroup}
            value={editUsers.group || ''}
            helperText="Please select your group"
          >
            {groups.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-select-customer"
            select
            label="Customer"
            onChange={handleCustomer}
            value={editUsers.customer || ''}
            helperText="Please select your customer"
          >
            {customers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Button color='primary' variant='outlined' onClick={handleClick}>ConsoleLog</Button>
      </div>
    </form>

  )
}


export default EditUser