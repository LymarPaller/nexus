import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faHeart,
  faComment,
  faTag,
  faThumbsUp,
  faCalendarAlt,
  faShare,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/nexus-logo-blue.svg";
import Home from "../assets/icons/home.svg";
import Logout from "../assets/icons/logout.svg";
import Moon from "../assets/icons/moon.svg";
import Notification from "../assets/icons/notification.svg";
import Profile from "../assets/icons/profile.svg";
import Search from "../assets/icons/search.svg";
import "../styles/Navbar.scss";
import "../styles/ModalLogout.scss"
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
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
    setShowLogoutModal(true);
  };

  const handleLogoutConfirmed = () => {
    setShowLogoutModal(false);
    navigate("/login");
  };

  const notificationData = [
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Riya Villamor",
      message: "Liked your photo of a dog.",
      icon: "heart",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Lymar Paller",
      message: "Commented on your post about dogs.",
      icon: "comment",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Klane Zurbano",
      message: "Tagged you in a photo.",
      icon: "tag",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Elaine Lynch",
      message: "Reacted to your post.",
      icon: "thumbs-up",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Ederick Bañez",
      message: "Liked your post about dog breeds.",
      icon: "heart",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Gerwin BG",
      message: "Invited you to an event.",
      icon: "calendar-alt",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Baneknek Zapuiz",
      message: "Commented on a post you commented on.",
      icon: "comment",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Roldan Feliciano",
      message: "Shared your post about cute puppies.",
      icon: "share",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Matthew Marin",
      message: "Mentioned you in a comment.",
      icon: "comment",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Tynneth Joel",
      message: "Sent you a friend request.",
      icon: "user-friends",
    },





    {
      profilePic: "../assets/icons/profile.svg",
      name: "Mark Anthony Ong",
      message: "Reacted with a heart emoji to your dog's video.",
      icon: "heart",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Gale Perez",
      message: "Commented: 'What a cute pup!' on your dog photo.",
      icon: "comment",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Dom Consignado",
      message: "Asked for advice on grooming their dog.",
      icon: "comment",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Ernelle Alba",
      message: "Invited you to a dog-friendly event in the park.",
      icon: "calendar-alt",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Gisel Catbagan",
      message: "Your dog's photo just made my day!",
      icon: "heart",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Mark Dave Seneres",
      message: "Can't believe how adorable your dog is!",
      icon: "comment",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Maricar Rubio",
      message: "Just wanted to say your dog is a superstar!",
      icon: "thumbs-up",
    },
    {
      profilePic: "../assets/icons/profile.svg",
      name: "Kier Elmido",
      message: "Let's plan a playdate for our dogs soon!",
      icon: "calendar-alt",
    }

  ];

  return (
    <div>
      <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
        <div className="navbar-left">
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <div className="main-navbar-mobile">
            <Link to="/">
              <img src={Home} alt="Home" className="navbar-icon" />
            </Link>
            <Link to="/profile">
              <img src={Profile} alt="Profile" className="navbar-icon" />
            </Link>
            <img
              src={Notification}
              alt="Notification"
              className="navbar-icon"
              onClick={() => setShowNotifications(true)}
            />
          </div>
        </div>
        <div className="navbar-center">
          <input type="text" className="navbar-search-bar" />
          <img
            src={Search}
            alt="Search"
            className="navbar-icon navbar-search-icon"
          />
        </div>
        <div className="navbar-right">
          <img
            src={Moon}
            alt="Dark Mode"
            className="navbar-icon"
            onClick={handleDarkModeToggle}
          />
          <img
            src={Logout}
            onClick={handleLogOut}
            alt="Logout"
            className="navbar-icon logout-logout-button"
          />

          {/* Logout Confirmation Modal */}
          <Modal
            isOpen={showLogoutModal}
            onRequestClose={() => setShowLogoutModal(false)}
            className="modal"
            overlayClassName="modal-overlay"
          >
            <div className="logout-header">
              <h5>Logout Confirmation</h5>
              <button
                className="modal-close-button"
                onClick={() => setShowLogoutModal(false)}
              >
                <FontAwesomeIcon icon={faTimes} className="logout-xmark"/>
              </button>
            </div>
            <div className="modal-content">
              <p>Are you sure you want to logout?</p>
              <div className="modal-buttons">
                <button className="add-btn" onClick={() => setShowLogoutModal(false)}>Cancel</button>
                <button className="remove-btn" onClick={handleLogoutConfirmed}>Logout</button>
              </div>
            </div>
          </Modal>
        </div>
      </nav>

      {showNotifications && (
        <div className="notifications-modal">
          <div className="notifications-header">
            <h4>Notifications</h4>
            <button
              className="close-button"
              onClick={() => setShowNotifications(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="notifications-content">
            <div className="notifications-scroll-container">
              {notificationData.map((notification, index) => (
                <div className="notification-item" key={index}>
                  <img
                    src={Profile}
                    alt={notification.name}
                    className="profile-pic"
                  />
                  <div className="notification-text">
                    <p>
                      <span className="notification-name">
                        {notification.name}
                      </span>{" "}
                      {notification.message}
                    </p>
                    <div className="notification-icon">
                      {notification.icon === "heart" && (
                        <FontAwesomeIcon icon={faHeart} />
                      )}
                      {notification.icon === "comment" && (
                        <FontAwesomeIcon icon={faComment} />
                      )}
                      {notification.icon === "tag" && (
                        <FontAwesomeIcon icon={faTag} />
                      )}
                      {notification.icon === "thumbs-up" && (
                        <FontAwesomeIcon icon={faThumbsUp} />
                      )}
                      {notification.icon === "calendar-alt" && (
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      )}
                      {notification.icon === "share" && (
                        <FontAwesomeIcon icon={faShare} />
                      )}
                      {notification.icon === "user-friends" && (
                        <FontAwesomeIcon icon={faUserFriends} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
