import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseDetails.css';
import { FaGoogle, FaGithub, FaPrint, FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";
// import { useReactToPrint } from 'react-to-print';

const ref = React.createRef();

const CourseDetails = () => {
    const { course_title, details_overview, image_url, _id, overview_title, ratings } = useLoaderData()

    // const printingAreaRef = useRef()
    // const handlePrint = useReactToPrint({
    //     content: () => printingAreaRef.current,
    //     documentTitle:'emp-data',
    //     onAfterPrint:()=>alert('Print Success')
    // })

    return (
        <>
            <Card className='card_details' >
                <Card.Header className='d-flex justify-content-between align-items-center gap-3'>
                    <h5 className="py-0 my-0">Courses Full Overview</h5>
                    <Pdf targetRef={ref} filename="course-details.pdf">
                        {({ toPdf }) => <Button onClick={toPdf} variant='link' className="text-decoration-none text-success"><FaDownload /> Download PDF</Button>}
                    </Pdf>
                    
                </Card.Header>
                <Card.Img variant="top" className='p-3 card_img rounded-0' src={image_url} />
                <Card.Body>
                    <div ref={ref} style={{padding:'10px',width:'100%'}}>
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
                    </div>
                    <Link to={`/checkout/${_id}`} className="btn btn-success">Get premium access</Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default CourseDetails;