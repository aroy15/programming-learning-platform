import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Checkout = () => {
    const { course_title, image_url } = useLoaderData()
    return (
        <Card className="bg-dark text-dark">
            <Card.Img className='p-3' src={image_url} alt={course_title} />
            <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
                <div className='card-text p-3 rounded shadow-lg w-100 text-center' style={{backgroundColor:'rgba(194,211,244,0.90)',maxWidth:'500px'}}>                    
                    <Card.Title>{course_title}</Card.Title>
                    <h4 className='text-success'>Thanks for booking</h4>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Checkout;