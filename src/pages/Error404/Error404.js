import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css'

const Error404 = () => {
    return (
        <div className='error404 mx-auto shadow p-lg-5 p-4 mt-5 text-center'>
            <h2>404</h2>
            <h2 className='py-4'>The page not found</h2>
            <Link to='/' className='btn btn-danger'>Please Visit Home Page</Link>
        </div>
    );
};

export default Error404;