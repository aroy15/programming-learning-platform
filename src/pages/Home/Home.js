import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useLoaderData } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const courses = useLoaderData();
    return (
        <Carousel className='rounded'>
            {
                courses.map(course =>  <Carousel.Item key={course._id} className='rounded'>
                    <img
                        className="d-block w-100"
                        src={course.image_url}
                        alt={course.course_title}
                    />
                    <Carousel.Caption>
                        <h3>{course.course_title}</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>)
            }
        </Carousel>
    );
};

export default Home;