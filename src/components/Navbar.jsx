import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from '../assets/nexus-logo-blue.svg';
import Home from '../assets/icons/home.svg';
import Logout from '../assets/icons/logout.svg';
import Moon from '../assets/icons/moon.svg';
import Notification from '../assets/icons/notification.svg';
import Profile from '../assets/icons/profile.svg';
import Search from '../assets/icons/search.svg';
import '../styles/Navbar.scss';
import { Link } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const handleLogOut = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      // Perform logout actions here
      // For example: Clear user session, reset state, etc.

      // Redirect to login page
      navigate("/login");
    }
  };

  return (
    <div>
      <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
        <div className="navbar-left">
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <div className='main-navbar-mobile'>
            <Link to="/">
              <img src={Home} alt="Home" className="navbar-icon" />
            </Link>
            <Link to="/profile">
              <img src={Profile} alt="Profile" className="navbar-icon" />
            </Link>
            <Link to="/">
              <img src={Notification} alt="Notification" className="navbar-icon" />
            </Link>
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
          <img src={Logout} onClick={handleLogOut} alt="Logout" className="navbar-icon logout-logout-button"/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
