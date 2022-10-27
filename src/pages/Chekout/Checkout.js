import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Checkout = () => {
    const { course_title, details_overview, image_url, _id, overview_title, ratings } = useLoaderData()
    return (
        <Card className="bg-dark text-dark">
            <Card.Img className='p-3' src={image_url} alt={course_title} />
            <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
                <div className='card-text p-3 rounded shadow-lg w-100' style={{backgroundColor:'rgba(255,255,255,0.95)',maxWidth:'500px'}}>                    
                    <Card.Title>{course_title}</Card.Title>
                    <ul>
                        {
                            details_overview.map((detail, index) =><li key={index}>{detail}</li>)
                        }
                    </ul>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Checkout;