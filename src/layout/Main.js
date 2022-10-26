import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container style={{minHeight:'85vh'}} className='py-5'>
                <Outlet></Outlet>
            </Container>  
            <Footer></Footer>
        </div>
    );
};

export default Main;