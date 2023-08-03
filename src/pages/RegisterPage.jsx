import '../styles/main.scss';
import '../styles/normalize.scss';
import Logo from '../assets/nexus-logo-blue.svg';

function RegisterPage () {
    return (
        <>
        <div>

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
                        <button type='submit'>Register</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
        </>
    );
};

export default RegisterPage;