import React, { useState } from 'react';
import '../styles/ProfileDetail.scss';
import '../styles/EditProfile.scss';
import LocationPin from '../assets/icons/location.svg';
import WebIcon from '../assets/icons/web.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faTimes, faPlus, faEdit, faSave } from "@fortawesome/free-solid-svg-icons"; // Added faSave
import Modal from 'react-modal';
import { useModal } from '../app/useModal';

// Define the website link
const PROFILE_WEBSITE = 'https://www.instagram.com/wandaringmaltese/';

function WebsiteLink({ website }) {
  const handleWebsiteClick = () => {
    window.open(website, '_blank');
  };

  return (
    <span onClick={handleWebsiteClick}>
      <img src={WebIcon} alt="Website" />
      <p className="profile-website detail-container-other-details-paragraph">Website</p>
    </span>
  );
}

function ProfileDetail(props) {
  const { name, introduction, company, website, city, profilePhoto, coverPhoto } = props;

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedIntroduction, setEditedIntroduction] = useState(introduction);
  const [editedCompany, setEditedCompany] = useState(company);
  const [editedWebsite, setEditedWebsite] = useState(website);
  const [editedCity, setEditedCity] = useState(city);
  const [profileImage, setProfileImage] = useState(profilePhoto);
  const [coverImage, setCoverImage] = useState(coverPhoto);

  const [editNameMode, setEditNameMode] = useState(true);
  const [editIntroductionMode, setEditIntroductionMode] = useState(false);
  const [editCompanyMode, setEditCompanyMode] = useState(false);
  const [editWebsiteMode, setEditWebsiteMode] = useState(false);
  const [editCityMode, setEditCityMode] = useState(false);

  const [hasChanges, setHasChanges] = useState(false); // Track changes

  const { isOpen, openModal, closeModal } = useModal(); // Using the hook for modal state

  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleSaveProfile = () => {
    // Here you can send the edited data to your backend or update your state as needed
    setHasChanges(false); // Reset hasChanges after saving
    closeEditModal();
  };

  // Handle profile image change
  const handleProfileImageChange = (e) => {
    const uploadedProfileImage = URL.createObjectURL(e.target.files[0]);
    setProfileImage(uploadedProfileImage);
    setHasChanges(true); // Set hasChanges to true when profile image changes
  };

  // Handle cover image change
  const handleCoverImageChange = (e) => {
    const uploadedCoverImage = URL.createObjectURL(e.target.files[0]);
    setCoverImage(uploadedCoverImage);
    setHasChanges(true); // Set hasChanges to true when cover image changes
  };

  // Handle saving profile picture
  const handleSaveProfilePicture = () => {
    // Add logic here to save the profile picture
    // For example, you can send it to the backend if needed
    setHasChanges(false); // Reset hasChanges after saving
  };

  // Handle saving cover photo
  const handleSaveCoverPhoto = () => {
    // Add logic here to save the cover photo
    // For example, you can send it to the backend if needed
    setHasChanges(false); // Reset hasChanges after saving
  };

  return (
    <div className="profile-main-container">
      <div className="cover-photo">
        <img src={coverImage} alt="Cover" />
      </div>
      <div className="profile-photo">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="detail-container">
        <h1 className="user-profile-name">{editedName}</h1>
        <div className="detail-container-intro">
          <p>{editedIntroduction}</p>
          <p>{editedCompany}</p>
        </div>
        <div className="detail-container-other-details">
          <WebsiteLink website={editedWebsite} />
          <span>
            <img src={LocationPin} alt="Location" />
            <p className="profile-location detail-container-other-details-paragraph">
              {editedCity}
            </p>
          </span>
          <div>
            <FontAwesomeIcon
              icon={faUserPen}
              className="edit-icon"
              title="Edit Profile"
              onClick={openEditModal}
            />
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <Modal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          className="edit-profile-modal"
          overlayClassName="modal-overlay"
          ariaHideApp={false}
        >
          <div className="modal-content-edit-profile">
            <h2>Edit Profile</h2>
            <FontAwesomeIcon
              icon={faTimes}
              className="logout-xmark-edit close-svg"
              onClick={closeEditModal}
            />
            {/* Edit Profile*/}
            <div className="profile-edit-container">
              {/* Profile Picture */}
              <div className='edit-profile-header'>
                <h3>Profile picture</h3>
                <FontAwesomeIcon
                  icon={faSave}
                  className={`edit-icon ${hasChanges ? 'clickable' : ''}`}
                  title="Save Profile Picture"
                  onClick={hasChanges ? handleSaveProfilePicture : null}
                />
              </div>
              <div className="profile-picture-modal photo-modal">
                <img src={profileImage} alt="Profile" />
              </div>
              <div className="upload-photo">
                <input
                  type="file"
                  id="profilePictureInput"
                  name="profilePicture"
                  className="upload-button hidden"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                />
              </div>

              {/* Cover Photo */}
              <div className='edit-profile-header'>
                <h3>Cover Photo</h3>
                <FontAwesomeIcon
                  icon={faSave}
                  className={`edit-icon ${hasChanges ? 'clickable' : ''}`}
                  title="Save Cover Photo"
                  onClick={hasChanges ? handleSaveCoverPhoto : null}
                />
              </div>
              <div className="cover-photo-modal photo-modal">
                <img src={coverImage} alt="Cover photo" />
              </div>
              <div className="upload-photo">
                <input
                  type="file"
                  id="coverPhotoInput"
                  name="coverPhoto"
                  className="upload-button hidden"
                  accept="image/*"
                  onChange={handleCoverImageChange}
                />
              </div>

              {/* Name */}
              <div>
                <div className='edit-profile-header'>
                  <h3>Name</h3>
                  <p onClick={() => setEditNameMode(false)}>Edit</p>
                </div>
                {editNameMode ? (
                  <form className="form-container" onSubmit={handleSaveProfile}>
                    <input
                      type="text"
                      className="input-feed"
                      placeholder="Edit your name..."
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                    <button
                      type="button"
                      className="save-button"
                      onClick={() => {
                        setEditNameMode(true);
                        // Add logic here to save the edited name
                      }}
                    >
                      Save
                    </button>
                  </form>
                ) : null}
              </div>

              {/* Introduction */}
              <div>
              <h3 className='edit-add-ons'>Edit Additional Information</h3>
                <div className='edit-profile-header'>
                  <h3>Introduction</h3>
                  <p onClick={() => setEditIntroductionMode(true)}>Edit</p>
                </div>
                {editIntroductionMode ? (
                  <form className="form-container" onSubmit={handleSaveProfile}>
                    <textarea
                      className="input-feed"
                      placeholder="Describe yourself..."
                      value={editedIntroduction}
                      onChange={(e) => setEditedIntroduction(e.target.value)}
                    />
                    <button
                      type="button"
                      className="save-button"
                      onClick={() => {
                        setEditIntroductionMode(false);
                        // Add logic here to save the edited introduction
                      }}
                    >
                      Save
                    </button>
                  </form>
                ) : null}
              </div>

              {/* Company */}
              <div>
                
                <div className='edit-profile-header'>
                  <h3>Company</h3>
                  <p onClick={() => setEditCompanyMode(true)}>Edit</p>
                </div>
                {editCompanyMode ? (
                  <form className="form-container" onSubmit={handleSaveProfile}>
                    <textarea
                      className="input-feed"
                      placeholder="Edit your company..."
                      value={editedCompany}
                      onChange={(e) => setEditedCompany(e.target.value)}
                    />
                    <button
                      type="button"
                      className="save-button"
                      onClick={() => {
                        setEditCompanyMode(false);
                        // Add logic here to save the edited company
                      }}
                    >
                      Save
                    </button>
                  </form>
                ) : null}
              </div>

              {/* Website */}
              <div>
                <div className='edit-profile-header'>

                  <h3>Website</h3>
                  <p onClick={() => setEditWebsiteMode(true)}>Edit</p>
                </div>
                {editWebsiteMode ? (
                  <form className="form-container" onSubmit={handleSaveProfile}>
                    <input
                      type="text"
                      className="input-feed"
                      placeholder="Edit your website..."
                      value={editedWebsite}
                      onChange={(e) => setEditedWebsite(e.target.value)}
                    />
                    <button
                      type="button"
                      className="save-button"
                      onClick={() => {
                        setEditWebsiteMode(false);
                        // Add logic here to save the edited website
                      }}
                    >
                      Save
                    </button>
                  </form>
                ) : null}
              </div>

              {/* City */}
              <div>
                <div className='edit-profile-header'>
                  <h3>City</h3>
                  <p onClick={() => setEditCityMode(true)}>Edit</p>
                </div>
                {editCityMode ? (
                  <form className="form-container" onSubmit={handleSaveProfile}>
                    <input
                      type="text"
                      className="input-feed"
                      placeholder="Edit your city..."
                      value={editedCity}
                      onChange={(e) => setEditedCity(e.target.value)}
                    />
                    <button
                      type="button"
                      className="save-button"
                      onClick={() => {
                        setEditCityMode(false);
                        // Add logic here to save the edited city
                      }}
                    >
                      Save
                    </button>
                  </form>
                ) : null}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProfileDetail;
