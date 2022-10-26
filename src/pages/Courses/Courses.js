import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../shared/Sidebar/Sidebar';

const Courses = () => {
    return (
        <Row>
            <Col xs={12} md={8}>
                
            </Col>
            <Col xs={6} md={4}>
                <Sidebar></Sidebar>
            </Col>
        </Row>
    );
};

export default Courses;