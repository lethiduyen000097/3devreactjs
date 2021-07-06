import React from 'react';
import { makeStyles, TableContainer, Checkbox, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

const useStylesBt = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const ButtonTestFn = () => {

    const classes = useStylesBt();

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

function createCus(id, name, short_name, tip_code, code, address, status) {
return { id, name, short_name, tip_code, code, address, status };
}

const rows = [
    createCus(1 , 'Ruly Subin', 'Subin', 24, 20, '123 Stress, HN, VN', ),
    createCus(2 , 'Ruly No', 'No', 24, 20, '123 Stress, HN, VN', ),
    createCus(3 , 'Han Subin', 'Subin', 29, 20, '129 Stress, HN, VN', ),
    createCus(4 , 'Secsi Subin', 'Subin', 24, 20, '123 Stress, HN, VN', ),
    createCus(5 , 'Numi Subin', 'Subin', 20, 20, '923 Stress, HN, VN', ),
    createCus(6 , 'Ruly Jame', 'Jame', 24, 20, '13 Stress, HN, VN', ),
    createCus(7 , 'Ruly Jock', 'Jock', 24, 290, '120 Stress, HN, VN', ),
  ];

const Customers = () => {
    const classes = useStyles();
    return (
        <div>
            <h5>Customer table</h5>
            <div style={{ height: 400, width: '100%' }}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Shortname</TableCell>
            <TableCell align="center">Tip code</TableCell>
            <TableCell align="center">Code</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.short_name}</TableCell>
              <TableCell align="center">{row.tip_code}</TableCell>
              <TableCell align="center">{row.code}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell padding="checkbox" align="center">
                <Checkbox
                          // checked={isItemSelected}
                          // inputProps={{ 'aria-labelledby': labelId }}
                        />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <ButtonTestFn />
            </div>

        </div>
    )
}


export default Customers;