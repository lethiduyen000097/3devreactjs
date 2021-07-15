import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const CreateUser = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [group,setGroup] = useState('')
  const [customer,setCustomer] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordCheck,setPasswordCheck] = useState('')

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(5),
        width: '50ch',
      },
    },
  }));

  const classes = useStyles()

  
  const groups = [
    {
      value: 'VinFast',
      label: 'VinFast',
    },
    {
      value: 'VinSmart',
      label: 'VinSmart',
    },
    {
      value: 'VinMec',
      label: 'VinMec',
    },
    {
      value: 'VinPark',
      label: 'VinPark',
    },
  ];

  const customers = [
    {
      value: 'M',
      label: 'Male',
    },
    {
      value: 'F',
      label: 'Female',
    },
    {
      value: 'O',
      label: 'Other',
    },
  ];

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  
  const handleGroup = (e) => {
    setGroup(e.target.value)
  }

  const handleCustomer = (e) => {
    setCustomer(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
    if (password !== confirmPassword){
        setPasswordCheck('Password does not match!!')
      } else {
        setPasswordCheck('Password match!!')
      }
    }

  return (
  <form className={classes.root} noValidate autoComplete="off">
  <div>
    <h1>CREATE USER PAGE</h1>
    <TextField 
      id ="name-basic"
      label="Name"
      onChange = {handleName}
    />
    <TextField 
      id ="email-basic"
      label="Email"
      onChange = {handleEmail}
    />
    <TextField
      id="standard-select-group"
      select
      label="Group"
      value={group}
      onChange={handleGroup}
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
      label="Gender"
      value={customer}
      onChange={handleCustomer}
      helperText="Please select your gender"
    >
      {customers.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
      ))}
    </TextField>
    <TextField 
      id ="name-basic"
      label="Password"
      type="password"
      onChange = {handlePassword}
    />
    {password}
    <TextField 
      id ="name-basic"
      label="Confirm Password"
      type="Password"
      onChange = {handleConfirmPassword}
    //   onInput = {handlePasswordCheck}
      helperText = {passwordCheck}
    />
    {confirmPassword}
  <p>User Details:</p>
  <p>Name:   {name}</p>
  <p>Email:  {email}</p>
  <p>Group:  {group}</p>
  <p>Customer:  {customer}</p>
  </div>
  </form>
  )  
}

export default CreateUser
// git commit//
//git commit2//