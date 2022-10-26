import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { course_title, _id, details_overview, image_url, overview_title, ratings } = course
    const detailsOverview = details_overview.slice(0, 3);
    return (
        <Card className='shadow border-success'>
            <Card.Img variant="top" className='card_img p-3' src={image_url} />
            <Card.Body>
                <Card.Title>{course_title}</Card.Title>
                <div className='card-text'>
                    <ul>
                        {
                            detailsOverview.map((detail, index) => <li
                                key={index}
                            >{detail}</li>)
                        }
                    </ul>
                </div>
                <Link to={`/courses/${_id}`} className='btn btn-success'>Reade More</Link>
            </Card.Body>
        </Card>
    );
};

export default CourseCard;