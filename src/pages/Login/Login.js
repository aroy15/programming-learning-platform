import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {googleProviderLogin} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        googleProviderLogin(googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='form_page'>
            <h2 className='text-center mb-4'>Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="success" className='w-100' type="submit">
                    Submit
                </Button>
            </Form>
            <div className='mt-4 text-center login_with d-flex gap-3 justify-content-center'>
                <Button onClick={googleSignIn} variant='outline-success' className='d-flex align-items-center flex-nowrap'><span className='pe-3'>Log In With Google</span><FaGoogle/></Button>
                <Button variant='outline-success' className='d-flex align-items-center flex-nowrap'><span className='pe-3'>Log In With Github</span><FaGithub/></Button>
            </div>

        </div>
    );
};

export default Login;