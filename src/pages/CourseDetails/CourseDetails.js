import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseDetails.css';


const CourseDetails = () => {
    const { course_title, details_overview, image_url, overview_title, ratings } = useLoaderData()
    return (
        <Card className='card_details'>
            <Card.Header className='d-flex'>

            </Card.Header>
            <Card.Body>
                <h2 className='card-title mb-3'>{course_title}</h2>
                <div className='card-text'>
                   <h3>{overview_title}</h3>
                   <ul>
                        {
                            details_overview.map((detail, index) => <li
                            key={index}
                            >{detail}</li>)
                        }
                   </ul>
                </div>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default CourseDetails;