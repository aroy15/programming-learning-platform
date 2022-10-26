import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='py-5'>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;