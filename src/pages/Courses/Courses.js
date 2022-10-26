import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../shared/Sidebar/Sidebar';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../shared/CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Row className='g-4'>
            <Col xs={12} md={8}>
                <Row className='g-3'>
                        {
                    courses.map(course => <Col                     
                    key={course._id}
                    xs={12} lg={6}
                    className='d-flex'
                    >
                        <CourseCard course={course}></CourseCard>
                    </Col>)
                }
                </Row>
            </Col>
            <Col xs={12} md={4}>
                <Sidebar></Sidebar>
            </Col>
        </Row>
    );
};

export default Courses;