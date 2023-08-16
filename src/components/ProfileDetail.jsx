import React, { useState } from 'react';
import '../styles/ProfileDetail.scss';
import LocationPin from '../assets/icons/location.svg';
import WebIcon from '../assets/icons/web.svg';
import PlaceholderCover from '../assets/landing-page-photo.jpg';
import Profile from '../assets/wanda.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";

const PROFILE_WEBSITE = 'https://www.instagram.com/wandaringmaltese/';

function WebsiteLink() {
  const handleWebsiteClick = () => {
    window.open(PROFILE_WEBSITE, '_blank');
  };

  return (
    <span onClick={handleWebsiteClick}>
      <img src={WebIcon} alt="Website" />
      <p className="profile-website detail-container-other-details-paragraph">Website</p>
    </span>
  );
}

function ProfileDetail() {
  const [profileData] = useState({
    coverPhoto: PlaceholderCover,
    profilePhoto: Profile,
    name: 'Wanda Zurbano',
    introduction: 'Wagging Wandarer',
    workplace: 'Works at Pawsitive Ventures',
    location: 'Barkingham Palace',
  });

  return (
    <div className="profile-main-container">
      <div className="cover-photo">
        <img src={profileData.coverPhoto} alt="Cover" />
      </div>
      <div className="profile-photo">
        <img src={profileData.profilePhoto} alt="Profile" />
      </div>
      <div className="detail-container">
        <h1 className="user-profile-name">{profileData.name}</h1>
        <div className="detail-container-intro">
          <p>{profileData.introduction}</p>
          <p>{profileData.workplace}</p>
        </div>
        <div className="detail-container-other-details">
          <WebsiteLink />
          <span>
            <img src={LocationPin} alt="Location" />
            <p className="profile-location detail-container-other-details-paragraph">
              {profileData.location}
            </p>
          </span>
          <div>  <FontAwesomeIcon icon={faUserPen} className="edit-icon" title="Edit Profile" /></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;
