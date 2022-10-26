import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='text-center py-4 bg-dark text-light'>
            <Container>
                <p className='mb-0'>© Copyright {new Date().getFullYear()} | Programming Education</p>
            </Container>
        </div>
    );
};

export default Footer;