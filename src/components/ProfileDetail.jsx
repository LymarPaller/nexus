import React, { useState } from 'react';
import '../styles/ProfileDetail.scss';
import '../styles/EditProfile.scss';
import LocationPin from '../assets/icons/location.svg';
import WebIcon from '../assets/icons/web.svg';
import PlaceholderCover from '../assets/landing-page-photo.jpg';
import Profile from '../assets/wanda.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faTimes, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';
import { useModal } from '../app/useModal'; // Make sure to adjust the path

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

  const { isOpen, openModal, closeModal } = useModal(); // Using the hook for modal state

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
          <div>
            <FontAwesomeIcon
              icon={faUserPen}
              className="edit-icon"
              title="Edit Profile"
              onClick={openModal}
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="edit-profile-modal"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        {/* Modal content */}
        <div className="modal-content-edit-profile">
          <h2>Edit Profile</h2>
          <FontAwesomeIcon
            icon={faTimes}
            className="logout-xmark-edit"
            onClick={closeModal}
          />
          {/* Edit Profile*/}
          <div>
            <h3>Profile picture</h3>
            <p>Add</p>
          </div>
          <div className="profile-edit-container">
            <div className="profile-picture-modal">
              <img src={profileData.profilePhoto} alt="Profile" />
            </div>
            <div className="upload-photo">
              <input type="file" id="myFile" name="filename" className="upload-button" />
            </div>

            {/* Cover Photo*/}
            <div>
              <h3>Cover Photo</h3>
              <p>Edit</p>
            </div>
            <div className="cover-photo-modal">
              <img src={profileData.coverPhoto} alt="Cover photo" />
            </div>
            <div className="upload-photo">
              <input type="file" id="myFile" name="filename" className="upload-button" />
            </div>

            {/* Name*/}
            <div>
              <h3>Name</h3>
              <p>Edit</p>
              <form className="form-container">
                <textarea
                  className="input-feed"
                  placeholder="Edit your name..."
                />
                <button type="submit" className="save-button">Save</button>
              </form>
            </div>

            {/* Introduction*/}
            <div>
              <h3>Introduction</h3>
              <p>Add</p>
            </div>
            <form className="form-container">
              <textarea
                className="input-feed"
                placeholder="Describe yourself..."
              />
              <button type="submit" className="save-button">Save</button>
            </form>


            {/* Other Info */}
            <div>
              <h3>Edit Additional Information</h3>
              <div className="additional-info-container">
                <p>
                  <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                  Add a workplace
                </p>
                <p>
                  <FontAwesomeIcon icon={faPlus} className="plus-icon" />
                  Current city
                </p>
                <p>
                  <FontAwesomeIcon icon={faEdit} className="edit-icon" />
                  Edit Website
                </p>
              </div>
            </div>
            <button type="submit" className="save-button">Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProfileDetail;
