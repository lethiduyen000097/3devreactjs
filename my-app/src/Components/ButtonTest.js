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
      <Button variant="contained">Trạng thái</Button>
      <Button variant="contained" color="primary">
        Lưu
      </Button>
      <Button variant="contained" color="secondary">
        Hủy
      </Button>
      <Button variant="contained" disabled>
        Xem chi tiết
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Duyệt
      </Button>
    </div>
  );
}

export default ButtonTestFn;