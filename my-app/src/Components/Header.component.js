import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Header = () => {

    const classes = useStyle();

    return (
        <div className={classes.container}>
            <h1>Header</h1>
        </div>
    )
}

export default Header;