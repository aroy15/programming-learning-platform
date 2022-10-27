import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blogData = useLoaderData();

    const BlogCard = ({blog}) =>{
        const {title, content} = blog;

        return <Col className='d-flex text-center' md={6}>
                <div className='shadow rounded p-4'>
                    <h3 className='pb-3'>{title}</h3>
                    <div>{content}</div>
                </div>
            </Col>
    }
    return (
        <Row className='g-4'>
            {
                blogData.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
            
        </Row>
    );
};

export default Blog;