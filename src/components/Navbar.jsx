import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes, faHeart, faComment, faTag, faThumbsUp, faCalendarAlt, faShare,
  faUserFriends, faHouse, faUser, faBell, faRightFromBracket, faMoon,
  faMagnifyingGlass, faBars, faXmark, faSliders, faSun,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/nexus-logo-blue.svg";
import Profile from "../assets/icons/profile.svg";
import "../styles/Navbar.scss";
import "../styles/ModalLogout.scss";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useModal } from '../app/useModal';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../store/currentUserReducer";
import { useFormik } from "formik";
import axios from "axios";
import { setSearch } from "../store/searchReducer";

function Navbar() {
  const dispatch = useDispatch()
  const [darkMode, setDarkMode] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const navbarAsideNav = document.querySelector(".navbar-right");
  const [moonIcon, setMoonIcon] = useState(faMoon);
  const [showNavbarAside, setShowNavbarAside] = useState(false);
  const currentUser = useSelector((state) => state.currentUser);
  const search = useSelector((state) => state.search);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.add("dark-mode");
      setMoonIcon(faSun);
    } else {
      document.body.classList.remove("dark-mode");
      setMoonIcon(faMoon);
    }
  };

  const handleLogOut = () => {
    openModal();
  };

  const handleLogoutConfirmed = () => {
    dispatch(setCurrentUser(null))
    navigate('/login');
  };

  const handleNavbarToggle = () => {
    setShowNavbarAside(!showNavbarAside)
    if (showNavbarAside) {
      navbarAsideNav.classList.add("navbar-aside-toggled");
    } else {
      navbarAsideNav.classList.remove("navbar-aside-toggled");
    }
  }

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

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: async (values) => {
      const searchname = values.search
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/users?name=${searchname}`)
        dispatch(setSearch(res.data))
        navigate('/search')
      } catch (error) {
        console.error("Registration failed: ", error);
      }
    },
  });

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo-container-nexus">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-left">
          <div className="main-navbar-mobile">
            <div className="icon-wrapper">
              <Link to="/" className="icon-container">
                <FontAwesomeIcon icon={faHouse} className="navbar-icon" title="Home" />
              </Link>
            </div>
            <div className="icon-wrapper">
              <Link to="/profile" className="icon-container">
                <FontAwesomeIcon icon={faUser} className="navbar-icon" title="Account" />
              </Link>
            </div>
            <div className="icon-wrapper">
              <Link className="icon-container">
                <FontAwesomeIcon icon={faBell}
                  className="navbar-icon"
                  onClick={() => setShowNotifications(true)}
                  title="Notification"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <div className="search-wrapper">
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="search"
                className="navbar-search-bar"
                value={formik.values.search}
                onChange={formik.handleChange}
              />
              <button className="icon-container navbar-search" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-icon navbar-search-icon" title="Search" />
              </button>
            </form>
          </div>
          <div className="toggler-container">
            <div className="icon-container toggler-navbar" onClick={handleNavbarToggle}>
              <FontAwesomeIcon icon={faBars} className="navbar-icon" />
            </div>
          </div>
        </div>
        <div className={`navbar-right ${showNavbarAside ? 'navbar-aside-toggled' : ''}`}>
          <div className="icon-wrapper">
            <Link className="icon-container" onClick={handleDarkModeToggle}>
              <FontAwesomeIcon icon={moonIcon} className="navbar-icon" title="Darkmode" />
            </Link>
          </div>
          <div className="icon-wrapper  navbar-slider">
            <Link className="icon-container" to='/aside'>
              <FontAwesomeIcon icon={faSliders} className="navbar-icon" />
            </Link>
          </div>
          <div className="icon-wrapper">
            <Link className="icon-container">
              <FontAwesomeIcon icon={faRightFromBracket} onClick={handleLogOut} className="navbar-icon logout-logout-button" title="Logout" />
            </Link>
          </div>
          <div className="icon-wrapper x-toggler-aside" onClick={handleNavbarToggle}>
            <Link className="icon-container">
              <FontAwesomeIcon icon={faXmark} />
            </Link>
          </div>
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="modal"
            overlayClassName="modal-overlay"
            ariaHideApp={false}
          >
            <div className="logout-header">
              <h5>Logout Confirmation</h5>
              <button className="modal-close-button" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} className="logout-xmark" />
              </button>
            </div>
            <div className="modal-content">
              <p>Are you sure you want to logout?</p>
              <div className="modal-buttons">
                <button className="add-btn" onClick={closeModal}>
                  Cancel
                </button>
                {
                  currentUser && <button className="remove-btn" onClick={handleLogoutConfirmed}>
                    Logout
                  </button>
                }
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
