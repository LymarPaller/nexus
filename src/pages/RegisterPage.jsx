import { useState } from 'react';
import '../styles/RegisterPage.scss';
import Logo from '../assets/nexus-logo-blue.svg';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';


function RegisterPage() {
    const formik = useFormik({
        initialValues: {
            username: '',
            name: '',
            email: '',
            password: '',
        },
        
        onSubmit: (value) => {
            console.log(value)
        }
    })

    return (
        <>
            <div className='logo-container'>
                <img src={Logo} alt="Nexus-logo" />
            </div>

            <div className='card-container-login'>

                <div className='signup-login-container'>
                    <h1>Sign Up</h1>
                    <form action="" className='form-login form-signup' onSubmit={formik.handleSubmit}>

                        <input
                            id='username'
                            type="text"
                            placeholder='Username'
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            required />

                        <input
                            id='name'
                            type="text"
                            placeholder='Name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            required />

                        <input
                            id='email'
                            type="email"
                            placeholder='Email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            required />

                        <input
                            id='password'
                            type="password"
                            placeholder='Password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            required />

                        <div className='button-container button-register'>
                            <button className='button-register' type='submit'>Register</button>
                            <div className='back-button-container back-button-register'>
                                <Link to="/login" className='link-button'>
                                    <button type='submit' className='register-back-button'>
                                        <FontAwesomeIcon icon={faArrowLeft} className="back-icon" /> Back to Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default RegisterPage;