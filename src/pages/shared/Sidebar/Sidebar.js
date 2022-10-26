import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div>
            <h2>Sidebar</h2>
            <div>
                {courses.map(course => <Link                 
                key={course._id}
                to={`/courses/${course._id}`}
                className='d-block my-3 text-decoration-none text-dark fw-semibold'
                >{course.course_title}</Link>)}
            </div>
        </div>
    );
};

export default Sidebar;