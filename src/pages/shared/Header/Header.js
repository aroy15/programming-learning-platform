import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaMoon, FaSun } from "react-icons/fa";
import programmingLogo from "../../../assets/img/programming-logo.webp"



const Header = () => {
    const { user } = useContext(AuthContext);
    const [themes, setThemes] = useState(true);
    const handleThemes = () => setThemes(!themes);

    return (
        <Navbar bg="light" expand="lg" className='shadow-sm'>
            <Container>
                <div className='d-flex flex-nowrap'>
                    <Link to='/' className='navbar-brand text-success fw-semibold'>
                        <img src={programmingLogo} className='img-fluid' alt="" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='nav-link fw-semibold text-success' to="/courses">Courses</Link>
                        <Link className='nav-link fw-semibold text-success' to="/faq">FAQ</Link>
                        <Link className='nav-link fw-semibold text-success' to="/blog">Blog</Link>
                    </Nav>
                    <div className='d-flex gap-2 align-items-center'>
                        <div>
                            <a className='text-decoration-none' href="#">Login</a>
                            <OverlayTrigger
                                placement='left'
                                overlay={
                                    <Tooltip id='tooltip-bottom2'>
                                        Tooltip on.
                                    </Tooltip>
                                }
                            >
                                <Button variant="link">
                                    <Image roundedCircle src="https://lh3.googleusercontent.com/ogw/AOh-ky2K-6YfaeRXmwx67nuO3xkD0QvMf3JBZ9mV3ri5oA=s32-c-mo" alt="" />
                                </Button>
                            </OverlayTrigger>
                        </div>
                        <div>
                            <Button onClick={handleThemes} variant="link" className='text-dark text-decoration-none px-0'>
                                {
                                    themes ?
                                        <><FaMoon /> Dark</>
                                        :
                                        <><FaSun /> Light</>
                                }
                            </Button>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;