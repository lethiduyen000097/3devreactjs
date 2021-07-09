import React from 'react';
import { makeStyles, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const _createInputCustomer = () => {
    const classes = useStyles();

    return (
      <form className={classes.root} noValidate autoComplete="off">
        {/* <TextField id="standard-basic" label="Standard" /> */}
        {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
        <TextField id="id" label="ID" variant="outlined" />
        <TextField id="name" label="Name" variant="outlined" />
        <TextField id="short-name" label="Short name" variant="outlined" />
        <TextField id="tax-code" label="Tax-code" variant="outlined" />
        <TextField id="code" label="Code" variant="outlined" />
        <TextField id="address" label="Address" variant="outlined" />
      </form>
      
    );
}

    //render Group Buttons for Component 
    const _createButtonCustomer = () => {

        return (
        <div>
          <Button 
            variant="contained" 
            color="primary" 
          >
            Tạo
          </Button>
          <Button 
          variant="contained"
          >
            Hủy
          </Button>
        </div>
      );
    }
    // End function render Group Buttons

const BasicTextFields = () => {
    return(
<div style={{ height: 400, width: '100%' }}>
    {_createInputCustomer()}
    {_createButtonCustomer()}   
    </div>
    )
}

export default BasicTextFields;
