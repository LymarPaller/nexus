import '../styles/RegisterPage.scss';
import Logo from '../assets/nexus-logo-blue.svg';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

function RegisterPage () {
    return (
        <>
            <div className='logo-container'>
                <img src={Logo} alt="Nexus-logo" />
            </div>

            <div className='card-container-login'>

                <div className='signup-login-container'>
                    <h1>Sign Up</h1>
                    <form action="" className='form-login form-signup'>
                        <input type="text" placeholder='Username' required/>
                        <input type="text"  placeholder='Name' required/>
                        <input type="email" placeholder='Email' required/>
                        <input type="password"  placeholder='Password' required/>
                        <div className='button-container button-register'>
                            <Link to="/register" className='link-button'>
                                <button type='submit'>Register</button>
                            </Link>
                            <Link to="/login" className='link-button '>
                                <button type='submit' className=' register-back-button'>Back to Login</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        <Footer />
        </>
    );
};

export default RegisterPage;