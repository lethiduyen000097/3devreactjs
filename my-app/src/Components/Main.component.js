import React from 'react';
import { makeStyles } from '@material-ui/core';
import Input from './Input.component';

const useStyle = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const NoiDung = () => {

    const classes = useStyle();

    return (
        <div className={classes.container}>
            <p>Hóa đơn điện tử </p>
            <Input />
        </div>
    )
}

export default NoiDung;