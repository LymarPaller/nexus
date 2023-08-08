import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/LoginPage.scss';
import Logo from '../assets/nexus-logo-blue.svg';
import Footer from '../components/Footer.jsx';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <>
            <div className='login-page-main-container'>

                <div className='logo-container'>
                    <img src={Logo} alt="Nexus-logo" />
                </div>

                <div className='card-container-login'>

                    <div className='image-main-container'>
                        <div className='image-container-login-front'>
                        </div>
                        <div className='image-container-login-back'>
                        </div>
                    </div>

                    <div className='login-container'>
                        <h1>NeXus</h1>
                        <form action="" className='form-login' onSubmit={handleLogin}>
                            <input
                                type="text"
                                placeholder='Username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <input 
                                type="password" 
                                placeholder='Password' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                            <div className='button-container'>
                                <button type='submit'>Login</button>
                                <Link className='create-new-account' to="/register">Create New Account</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default LoginPage;