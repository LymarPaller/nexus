import { Link } from 'react-router-dom';
import '../styles/LoginPage.scss';
import Logo from '../assets/nexus-logo-blue.svg';

function LoginPage () {
    return (
        <>
        <div>

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
                    <form action="" className='form-login'>
                        <input type="text" placeholder='Username' required/>
                        <input type="password"  placeholder='Password' required/>
                        <div className='button-container'>
                            <button type='submit'>Login</button>
                            <Link className='create-new-account'>Create New Account</Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        </>
    );
};

export default LoginPage;