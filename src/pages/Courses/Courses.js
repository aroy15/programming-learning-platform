import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../shared/Sidebar/Sidebar';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Row>
            <Col xs={12} md={8}>
                {
                    courses.map(course => <h3 
                    key={course._id}                    
                    >{course.course_title}</h3>)
                }
            </Col>
            <Col xs={6} md={4}>
                <Sidebar></Sidebar>
            </Col>
        </Row>
    );
};

export default Courses;