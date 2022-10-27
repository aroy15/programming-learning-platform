import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('');
    const {providerLogin, signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    
    const googleSignIn = () => {
        setError('')
        providerLogin(googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            // navigate(from, {replace:true})
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
    }

    const githubSignIn = () =>{
        setError('')
        providerLogin(githubProvider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            // navigate(from, {replace:true})
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
    }

    const handleSubmit = event =>{
        setError('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error =>  {
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }

    return (
        <div className='form_page'>
            <h2 className='text-center mb-4'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="success" className='w-100' type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-danger text-center mt-4'>{error}</p>
            <div className='mt-4 text-center'>
                New User? <Link to='/register' className='text-success fw-semibold text-decoration-none'>Register</Link>
            </div>
            <div className='mt-4 text-center login_with d-flex gap-3 justify-content-center'>
                <Button onClick={googleSignIn} variant='outline-success' className='d-flex align-items-center flex-nowrap'><span className='pe-3'>Log In With Google</span><FaGoogle/></Button>
                <Button onClick={githubSignIn} variant='outline-success' className='d-flex align-items-center flex-nowrap'><span className='pe-3'>Log In With Github</span><FaGithub/></Button>
            </div>

        </div>
    );
};

export default Login;