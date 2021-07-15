// import React from 'react';

// const EditCustomers = () => {
//     return (
//         <>
//         <h3>Edit Customers</h3>
//         </>
//     )
// }

// export default EditCustomers;

import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
// import { MenuItem } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Button } from '@material-ui/core';



const EditCustomers = () => {
  const [editCustomer, setEditCustomer] = useState([{ id: '', name: '', shortName: '', taxCode: '', code: '',address: '',status: '', }])
  const location = useLocation()

  useEffect(() => {
    console.log('is it here?', location.state)
    if (location.state) {
        setEditCustomer(location.state)
    }
  }, [location])

  // console.log('Edit Users Info', editUsers)


//   const groups = [
//     {
//       value: 'Fuel',
//       label: 'Fuel',
//     },
//     {
//       value: 'Industrial Parts',
//       label: 'Industrial Parts',
//     },
//     {
//       value: 'Lubricants',
//       label: 'Lubricants',
//     },
//     {
//       value: 'Generators',
//       label: 'Generators',
//     },
//     {
//       value: 'Vehicles',
//       label: 'Vehicles',
//     },
//     {
//       value: 'Packaging',
//       label: 'Packaging',
//     }
//   ];

//   const customers = [
//     {
//       value: 'Petrolimex',
//       label: 'Petrolimex',
//     },
//     {
//       value: 'Penarol',
//       label: 'Penarol',
//     },
//     {
//       value: 'Shell',
//       label: 'Shell',
//     },
//     {
//       value: 'Castrol',
//       label: 'Castrol',
//     }
//   ];
//
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

  //

//   const handleEmail = (e) => {
//     setEditUsers({ ...editUsers, email: e.target.value })
//   }

//   const handleGroup = (e) => {
//     setEditUsers({ ...editUsers, group: e.target.value })
//   }

//   const handleCustomer = (e) => {
//     setEditUsers({ ...editUsers, customer: e.target.value })
//   }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(5),
        width: '50ch',
      },
    },
  }));

  const handleClick = () => {
    console.log(editCustomer)
  }

  const classes = useStyles()

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


          
          {/* <TextField
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
          </TextField> */}
        </div>
        <Button color='primary' variant='outlined' onClick={handleClick}>UPDATE</Button>
      </div>
    </form>

  )
}


export default EditCustomers;