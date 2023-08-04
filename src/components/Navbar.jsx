import Logo from '../assets/nexus-logo-blue.svg';
import Home from '../assets/icons/home.svg';
import Logout from '../assets/icons/logout.svg';
import Moon from '../assets/icons/moon.svg';
import Notification from '../assets/icons/notification.svg';
import Profile from '../assets/icons/profile.svg';
import Search from '../assets/icons/search.svg';
import '../styles/Navbar.scss';

function Navbar() {
    return (
        <>
            <div>
                <nav className="navbar">
                    <div className="navbar-left">
                        <img src={Logo} alt="Logo" className="navbar-logo" />
                        <img src={Home} alt="Home" className="navbar-icon" />
                        <img src={Profile} alt="Profile" className="navbar-icon" />
                        <img src={Notification} alt="Notification" className="navbar-icon" />
                    </div>
                    <div className="navbar-center">
                        <input type="text" className="navbar-search-bar" />
                        <img src={Search} alt="Search" className="navbar-icon" />
                    </div>
                    <div className="navbar-right">
                        <img src={Moon} alt="Dark Mode" className="navbar-icon" />
                        <img src={Logout} alt="Logout" className="navbar-icon" />
                    </div>
                </nav>

            </div>
        </>
    );
};

export default Navbar;