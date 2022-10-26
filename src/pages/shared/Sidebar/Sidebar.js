import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import './Sidebar.css';

const Sidebar = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const SidebarCourseItem = ({ course }) => {
        return (
            <li className="list-group-item px-0">
                <h5 className='d-flex align-items-center gap-2'>
                    <span>
                        <FaCheckCircle className='text-success'/>
                    </span>
                    <Link
                        to={`/courses/${course._id}`}
                        className='text-success d-block text-decoration-none fw-semibold'
                    >{course.course_title}</Link>
                </h5>
            </li>
        )
    }

    return (
        <div className='sidebar rounded shadow p-4 sticky-lg-top'>
            <h2 className='text-center'>Courses List</h2>
            <ul className="list-group list-group-flush">
                {courses.map(course => <SidebarCourseItem key={course._id} course={course}></SidebarCourseItem>)}
            </ul>
        </div>
    );
};

export default Sidebar;