import { useState } from "react";
import Logo from '../assets/nexus-logo-blue.svg';
import Home from '../assets/icons/home.svg';
import Logout from '../assets/icons/logout.svg';
import Moon from '../assets/icons/moon.svg';
import Notification from '../assets/icons/notification.svg';
import Profile from '../assets/icons/profile.svg';
import Search from '../assets/icons/search.svg';
import '../styles/Navbar.scss';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div>
      <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
        <div className="navbar-left">
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <div className='main-navbar-mobile'>
            <img src={Home} alt="Home" className="navbar-icon" />
            <img src={Profile} alt="Profile" className="navbar-icon" />
            <img src={Notification} alt="Notification" className="navbar-icon" />
          </div>
        </div>
        <div className="navbar-center">
          <input type="text" className="navbar-search-bar" />
          <img src={Search} alt="Search" className="navbar-icon navbar-search-icon" />
        </div>
        <div className="navbar-right">
          <img
            src={Moon}
            alt="Dark Mode"
            className="navbar-icon"
            onClick={handleDarkModeToggle}
          />
          <img src={Logout} alt="Logout" className="navbar-icon" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
