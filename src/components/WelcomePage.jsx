import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/nexus-logo-blue.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import ProfilePicture from '../assets/wanda.jpg';
import '../styles/WelcomePage.scss';
import { useParams } from 'react-router-dom';

function WelcomePage() {
  const { username } = useParams();

  return (
    <div className="welcome-page-container">
      <img src={Logo} alt="Nexus-logo" className="logo-container" />

      <div className="welcome-profile-picture">
        <img src={ProfilePicture} alt="Profile" />
      </div>

      <div className="welcome-message-container">
        <h1>Welcome to Nexus, {username}</h1>
        <p>Let's start customizing your profile</p>
      </div>

      <Link to="/profile" className="customize-button">
        <FontAwesomeIcon icon={faUserCog} className="button-icon" />
        Customize Profile
      </Link>
    </div>
  );
}

export default WelcomePage;
