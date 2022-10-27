import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseDetails.css';
import { FaGoogle, FaGithub, FaPrint } from "react-icons/fa";
import { useReactToPrint } from 'react-to-print';


const CourseDetails = () => {
    const { course_title, details_overview, image_url, overview_title, ratings } = useLoaderData()

    const printingAreaRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printingAreaRef.current,
        documentTitle:'emp-data',
        onAfterPrint:()=>alert('Print Success')
    })

    return (
        <Card className='card_details' ref={printingAreaRef}>
            <Card.Header className='d-flex justify-content-between align-items-center gap-3'>                
                <h5 className="py-0 my-0">Courses Full Overview</h5>
                <Button onClick={handlePrint} variant='link' className="text-decoration-none text-success"><FaPrint/> Print</Button>
            </Card.Header>
            <Card.Img variant="top" className='p-3 card_img rounded-0' src={image_url} />
            <Card.Body>
                <h2 className='card-title mb-3'>{course_title}</h2>
                <div className='card-text'>
                    <ul>
                        {
                            details_overview.map((detail, index) => <li
                                key={index}
                            >{detail}</li>)
                        }
                    </ul>
                </div>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default CourseDetails;