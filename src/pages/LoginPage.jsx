import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/LoginPage.scss';
import { faEye, faEyeSlash, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/nexus-logo-blue.svg';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../store/currentUserReducer';


function LoginPage() {  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required'),
    password: Yup.string().required('Password is required'),
  });


  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post('http://localhost:8000/api/v1/login', {
          username: values.username,
          password: values.password,
        })
        
        if (res.status === 200 && res.data.success) {
          dispatch(setCurrentUser(res.data.user))
          console.log('Login Successful');
        } else {
          console.error('Login failed: ', res.data.message);
        }
      } catch (error) {
        console.error('An error occurred: ', error);
      }
    },
  });

  useEffect(() => {
    document.title = 'Login';
  }, []);

  useEffect(() => {
    if(currentUser) {
      navigate('/')
    }
  }, [currentUser]);

  return (
    <>
      <div className='login-page-main-container'>
        <div className='logo-container'>
          <img src={Logo} alt='Nexus-logo' />
        </div>
        <div className='card-container-login'>
          <div className='image-main-container'>
            <div className='image-container-login-front'></div>
            <div className='image-container-login-back'></div>
          </div>
          <div className='login-container'>
            <h1>NeXus</h1>
            <form className='form-login' onSubmit={formik.handleSubmit}>
              <div className='input-container'>
                <input
                  type='text'
                  placeholder='username'
                  {...formik.getFieldProps('username')}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className='error-container'>
                    <FontAwesomeIcon icon={faExclamationTriangle} className='error-icon' />
                    {formik.errors.username}
                  </div>
                ) : null}
              </div>
              <div className='input-container'>
                <input
                  type={formik.values.showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  {...formik.getFieldProps('password')}
                />
                <button
                  type='button'
                  className='password-toggle-button'
                  onClick={() =>
                    formik.setFieldValue(
                      'showPassword',
                      !formik.values.showPassword
                    )
                  }
                >
                  <FontAwesomeIcon
                    icon={formik.values.showPassword ? faEye : faEyeSlash}
                    className='eye-icon'
                  />
                </button>
                {formik.touched.password && formik.errors.password ? (
                  <div className='error-container'>
                    <FontAwesomeIcon icon={faExclamationTriangle} className='error-icon' />
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className='button-container'>
                <button className='login-button' type='submit'>
                  Login
                </button>
                <Link className='create-new-account' to='/register'>
                  Create New Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
