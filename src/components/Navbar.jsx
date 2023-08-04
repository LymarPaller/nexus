import Logo from '../assets/nexus-logo-blue.svg';
import Home from '../assets/icons/home.svg';
import Logout from '../assets/icons/logout.svg';
import Moon from '../assets/icons/moon.svg';
import Notification from '../assets/icons/notification.svg';
import Profile from '../assets/icons/profile.svg';
import Search from '../assets/icons/search.svg';
import '../styles/Navbar.scss';

function Navbar () {
    return (
        <>
        <div>
            <nav className='nav-bar-container'>
                <div className='nav-brand'>
                    <img src={Logo} alt="" />
                </div>
                <ul className='nav-bar-left'>
                    <li>
                        <img src={Home} alt="" />
                    </li>
                    <li>
                        <img src={Profile} alt="" />
                    </li>
                    <li>
                        <img src={Notification} alt="" />
                    </li>
                </ul>
                <div className='search-container'>
                    <input type="text" name="search-box" id="search-box" />
                    <span><img src={Search} alt="" /></span>
                </div>
                <div className='nav-bar-right'>
                    <img src={Moon} alt="" />
                    <img src={Logout} alt="" />
                </div>
            </nav>

        </div>
        </>
    );
};

export default Navbar;