import React from "react";
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const ButtonTestFn = () => {

    const classes = useStyles();

    return (
      
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Enable
      </Button>
      <Button variant="contained" disabled>
        Disable
      </Button>
    </div>
  );
}

export default ButtonTestFn;