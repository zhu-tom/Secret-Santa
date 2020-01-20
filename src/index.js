import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Typography } from '@material-ui/core';
import FormPaper from './components/formPaper';
import Navbar from './components/navbar';

ReactDOM.render(
    <div>
        <Navbar page="Sign Up"/>
        <Container maxWidth='sm'>
            <FormPaper/>
        </Container>
    </div>, 
    document.getElementById('root'));
