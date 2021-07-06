import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Header from './Header.component';
import Menu from './Menu.component';
import NoiDung from './Main.component';
import Input from './Input.component';
import ButtonTestFn from './ButtonTest';




const FixedContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        <Header />
        <Menu />
        <NoiDung />
        <Input />
        <ButtonTestFn />
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default FixedContainer;