import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {    
    const [error, setError] = useState('');

    const {createUser} = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        
        setError('');

        if(!/^(?=.*[\w])(?=.*[\W])[\w\W]{6,}/.test(password)){
            setError('Password should be contain: 6 characters long with at least one lowercase, one uppercase, one digit, one special character');
            return
        }
        if(password !== confirmPassword){
            setError('password not matching');
            return;
        }
        // Create user after solving above conditions
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error));
    }

    return (
        <div className='form_page'>
            <h2 className='text-center mb-4'>Register Account</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="signupFullName">
                    <Form.Label>Full Name*</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Full Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="signupEmail">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="signupPhotoURL">
                    <Form.Label>Photo URL *</Form.Label>
                    <Form.Control name="photoURL" type="url" placeholder="Photo URL" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="signupPassword">
                    <Form.Label>Password *</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="signupConfirmPassword">
                    <Form.Label>Confirm Password *</Form.Label>
                    <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" required/>
                </Form.Group>
                <Button variant="success" className='w-100' type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-danger text-center mt-4'>{error}</p>
            <div className='mt-4 text-center'>
                Already have an account? <Link to='/login' className='text-success fw-semibold text-decoration-none'>Log In</Link>
            </div>

        </div>
    );
};

export default Register;