import { useState } from 'react';
import '../styles/RegisterPage.scss';
import Logo from '../assets/nexus-logo-blue.svg';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();

        console.log('Username:', username);
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <>
            <div className='logo-container'>
                <img src={Logo} alt="Nexus-logo" />
            </div>

            <div className='card-container-login'>

                <div className='signup-login-container'>
                    <h1>Sign Up</h1>
                    <form action="" className='form-login form-signup' onSubmit={handleRegister}>

                        <input
                            type="text"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />

                        <input
                            type="text"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />

                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />

                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
            <Footer />
        </>
    );
};

export default RegisterPage;