import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/RegisterPage.scss";
import {
  faExclamationTriangle,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/nexus-logo-blue.svg";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      showPassword: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values)
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/users",
          values
        );
        const { id, username } = res.data.data;
        localStorage.setItem("id", id);
        localStorage.setItem("username", username);
        navigate(`/welcome/${username}`);
      } catch (error) {
        console.error("Registration failed: ", error);
      }
    },
  });

  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <>
      <div className='logo-container'>
        <img
          src={Logo}
          alt='Nexus-logo'
        />
      </div>

      <div className='card-container-login'>
        <div className='signup-login-container'>
          <h1>Sign Up</h1>
          <form
            className='form-login form-signup'
            onSubmit={formik.handleSubmit}
          >
            <div className='register-input-container'>
              <input
                id='username'
                type='text'
                placeholder='Username'
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className='error-container'>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className='error-icon'
                  />
                  {formik.errors.username}
                </div>
              ) : null}
            </div>

            <div className='register-input-container'>
              <input
                id='name'
                type='text'
                placeholder='Name'
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className='error-container'>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className='error-icon'
                  />
                  {formik.errors.name}
                </div>
              ) : null}
            </div>

            <div className='register-input-container'>
              <input
                id='email'
                type='email'
                placeholder='Email'
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className='error-container'>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className='error-icon'
                  />
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className='register-input-container'>
              <input
                id='password'
                type={formik.values.showPassword ? "text" : "password"}
                placeholder='Password'
                {...formik.getFieldProps("password")}
              />
              <span
                className='eye-icon'
                onClick={() =>
                  formik.setFieldValue(
                    "showPassword",
                    !formik.values.showPassword
                  )
                }
              >
                <FontAwesomeIcon
                  icon={formik.values.showPassword ? faEye : faEyeSlash}
                />
              </span>
              {formik.touched.password && formik.errors.password ? (
                <div className='error-container'>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className='error-icon'
                  />
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className='button-container button-register'>
              <button
                className='button-register'
                type='submit'
              >
                Register
              </button>
              <div className='back-button-container back-button-register'>
                <Link
                  to='/login'
                  className='link-button'
                >
                  <button
                    type='submit'
                    className='register-back-button'
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className='back-icon'
                    />{" "}
                    Back to Login
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
