import React from 'react';
import Logo from '../assets/nexus-logo-blue.svg';
import { faArrowLeft, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';  
import '../styles/RegisterPage.scss';

function RegisterPage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const initialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);      
      navigate(`/welcome/${values.username}`);
    },
  });

  return (
    <>
      <div className='logo-container'>
        <img src={Logo} alt='Nexus-logo' />
      </div>

      <div className='card-container-login'>
        <div className='signup-login-container'>
          <h1>Sign Up</h1>
          <form className='form-login form-signup' onSubmit={formik.handleSubmit}>
            <input
              id='username'
              type='text'
              placeholder='Username'
              {...formik.getFieldProps('username')}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className='error-container'>
                <FontAwesomeIcon icon={faExclamationTriangle} className='error-icon' />
                {formik.errors.username}
              </div>
            ) : null}

            <input
              id='name'
              type='text'
              placeholder='Name'
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className='error-container'>
                <FontAwesomeIcon icon={faExclamationTriangle} className='error-icon' />
                {formik.errors.name}
              </div>
            ) : null}

            <input
              id='email'
              type='email'
              placeholder='Email'
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='error-container'>
                <FontAwesomeIcon icon={faExclamationTriangle} className='error-icon' />
                {formik.errors.email}
              </div>
            ) : null}

            <input
              id='password'
              type='password'
              placeholder='Password'
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='error-container'>
                <FontAwesomeIcon icon={faExclamationTriangle} className='error-icon' />
                {formik.errors.password}
              </div>
            ) : null}

            <div className='button-container button-register'>
              <button className='button-register' type='submit'>
                Register
              </button>
              <div className='back-button-container back-button-register'>
                <Link to='/login' className='link-button'>
                  <button type='submit' className='register-back-button'>
                    <FontAwesomeIcon icon={faArrowLeft} className='back-icon' /> Back to Login
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
