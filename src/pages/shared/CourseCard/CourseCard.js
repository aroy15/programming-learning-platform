import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaCheck, FaStar } from "react-icons/fa";

const CourseCard = ({ course }) => {
    const { course_title, _id, details_overview, image_url, ratings } = course
    const detailsOverview = details_overview.slice(0, 3);

    const CourseCardItemList = ({detail}) =>{
        return(
            <p className='d-flex align-items-center gap-2 mb-2'>
                    <span>
                        <FaCheck className='text-success'/>
                    </span>
                    <span
                        className='text-dark d-block text-decoration-none fw-semibold'
                    >{detail}</span>
            </p>
        )
    }

    return (
        <Card className='shadow border-success'>
            <Card.Img variant="top" className='card_img p-3' src={image_url} />
            <Card.Body>
                <Card.Title>{course_title}</Card.Title>
                <div className='card-text pt-4'>
                   
                        {
                            detailsOverview.map((detail, index) => <CourseCardItemList key={index} detail={detail}/>)
                        }
                </div>
                
            </Card.Body>
            <Card.Footer className='d-flex gap-3 justify-content-between align-items-center'>
                <Link to={`/courses/${_id}`} className='btn btn-success'>Reade More</Link>
                <div className='text-primary'>
                      Ratings <FaStar/>  {ratings}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CourseCard;