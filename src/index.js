import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Typography } from '@material-ui/core';
import Form from './components/signUp';
import Navbar from './components/navbar';

ReactDOM.render(
    <div>
        <Navbar page="Sign Up"/>
        <Container maxWidth='sm'>
            <Form/>
        </Container>
    </div>, 
    document.getElementById('root'));
