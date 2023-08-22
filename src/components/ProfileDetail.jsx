import React, { useState } from "react";
import "../styles/ProfileDetail.scss";
import "../styles/EditProfile.scss";
import LocationPin from "../assets/icons/location.svg";
import WebIcon from "../assets/icons/web.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPen,
  faTimes,
  faBriefcase,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import userPlaceHolder from "../assets/icons/profile.svg";
import Modal from "react-modal";
import { useModal } from "../app/useModal";
import axios from "axios";
import { useSelector } from "react-redux";
import debounce from "lodash/debounce";

const PROFILE_WEBSITE = "https://www.instagram.com/wandaringmaltese/";

function WebsiteLink({ website }) {
  const handleWebsiteClick = () => {
    window.open(website, "_blank");
  };

  return (
    <span onClick={handleWebsiteClick}>
      <img src={WebIcon} alt="Website" />
      <p className="profile-website detail-container-other-details-paragraph">
        {website}
      </p>
    </span>
  );
}

function ProfileDetail({ setReload }) {
  const currentUser = useSelector((state) => state.currentUser);
  const name = currentUser.name;
  const profilePhoto = currentUser.profilePhoto;
  const coverPhoto = currentUser.coverPhoto;
  const city = currentUser.city;
  const website = currentUser.websites;
  const introduction = currentUser.introduction;
  const company = currentUser.company;

  const [profilePhotos, setProfilePhoto] = useState(null);
  const [profilePhotoFile, setProfilePhotoFile] = useState(null);
  const [coverPhotos, setCoverPhoto] = useState(null);
  const [coverPhotoFile, setCoverPhotoFile] = useState(null);
  const [uploadedProfilePhoto, setUploadedProfilePhoto] = useState(null);
  const [uploadedCoverPhoto, setUploadedCoverPhoto] = useState(null);
  const [renderProfilePhoto, setRenderProfilePhoto] = useState(null);
  const [renderCoverPhoto, setRenderCoverPhoto] = useState(null);

  const debouncedProfilePhotoChange = debounce((e) => {
    const file = e.target.files[0];
    setProfilePhotoFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePhoto(reader.result);
    };
    reader.readAsDataURL(file);
  }, 1000);

  const debouncedCoverPhotoChange = debounce((e) => {
    const file = e.target.files[0];
    setCoverPhotoFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  }, 1000);

  const [profileObject, setProfileObject] = useState({
    name,
    introduction,
    company,
    websites: website,
    city,
  });

  const [loading, setLoading] = useState({
    profilePhoto: false,
    coverPhoto: false,
    profile: false,
  });

  const [success, setSuccess] = useState({
    profilePhoto: "",
    coverPhoto: "",
  });

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedIntroduction, setEditedIntroduction] = useState(introduction);
  const [editedCompany, setEditedCompany] = useState(company);
  const [editedWebsite, setEditedWebsite] = useState(website);
  const [editedCity, setEditedCity] = useState(city);

  const [editNameMode, setEditNameMode] = useState(true);
  const [editIntroductionMode, setEditIntroductionMode] = useState(false);
  const [editCompanyMode, setEditCompanyMode] = useState(false);
  const [editWebsiteMode, setEditWebsiteMode] = useState(false);
  const [editCityMode, setEditCityMode] = useState(false);

  const [hasChanges, setHasChanges] = useState(false);

  const { isOpen, openModal, closeModal } = useModal();

  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditIntroductionMode(false);
    setEditCompanyMode(false);
    setEditWebsiteMode(false);
    setEditCityMode(false);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileObject((prev) => {
      return { ...prev, [name]: value };
    });
    setHasChanges(true);
  };

  const handleSaveProfileObject = async (e) => {
    e.preventDefault();
    try {
      const updatedUserData = {
        name: editedName,
        introduction: editedIntroduction,
        company: editedCompany,
        websites: editedWebsite,
        city: editedCity,
      };

      const update = await axios.patch(
        `http://localhost:8000/api/v1/users/${currentUser.id}`,
        updatedUserData
      );

      if (update.status === 200) {
        setHasChanges(false);
        // reload changes
        setReload((prev) => !prev);
        closeEditModal();
      } else {
        // Handle errors, if any
      }
    } catch (error) {
      console.log(error);
      // Handle API request errors
    }
  };

  const handleSaveProfilePicture = async (e) => {
    e.preventDefault();
    try {
      setLoading((prev) => ({ ...prev, profilePhoto: true }));

      // Simulate an API request to upload the profile picture
      setTimeout(() => {
        // Assuming `newProfilePhotoUrl` is the URL of the uploaded photo
        const newProfilePhotoUrl = "https://example.com/new-profile-photo.jpg";
        setProfilePhoto(newProfilePhotoUrl); // Update the profile photo URL
        setUploadedProfilePhoto(newProfilePhotoUrl); // Update the uploaded profile photo URL
        setRenderProfilePhoto(newProfilePhotoUrl); // Update the rendered profile photo URL
        setSuccess((prev) => ({ ...prev, profilePhoto: "Profile picture uploaded!" }));
        setLoading((prev) => ({ ...prev, profilePhoto: false }));
      }, 2000);
    } catch (error) {
      console.log(error);
      // Handle errors, if any
    }
  };

  const handleSaveCoverPhoto = async (e) => {
    e.preventDefault();
    try {
      setLoading((prev) => ({ ...prev, coverPhoto: true }));

      // Simulate an API request to upload the cover photo
      setTimeout(() => {
        // Assuming `newCoverPhotoUrl` is the URL of the uploaded photo
        const newCoverPhotoUrl = "https://example.com/new-cover-photo.jpg";
        setCoverPhoto(newCoverPhotoUrl); // Update the cover photo URL
        setUploadedCoverPhoto(newCoverPhotoUrl); // Update the uploaded cover photo URL
        setRenderCoverPhoto(newCoverPhotoUrl); // Update the rendered cover photo URL
        setSuccess((prev) => ({ ...prev, coverPhoto: "Cover photo uploaded!" }));
        setLoading((prev) => ({ ...prev, coverPhoto: false }));
      }, 2000);
    } catch (error) {
      console.log(error);
      // Handle errors, if any
    }
  };

  return (
    <div className="profile-main-container">
      <div className="cover-photo">
        <img src={renderCoverPhoto || coverPhoto || userPlaceHolder} alt="Cover" />
      </div>
      <div className="profile-photo">
        <img src={renderProfilePhoto || profilePhoto || userPlaceHolder} alt="Profile" />
      </div>
      <div className="detail-container">
        <h1 className="user-profile-name">{name}</h1>
        <div className="detail-container-intro">
          <p>{introduction}</p>
          <p>
            <FontAwesomeIcon icon={faBriefcase} /> Works at{" "}
            <strong>{company}</strong>
          </p>
        </div>
        <div className="detail-container-other-details">
          <WebsiteLink website={website} />
          <span>
            <img src={LocationPin} alt="Location" />
            <p className="profile-location detail-container-other-details-paragraph">
              {city}
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
            <div className="profile-edit-container">
              <form onSubmit={handleSaveProfilePicture}>
                <div className="edit-profile-header">
                  <h3>Profile picture</h3>
                  <FontAwesomeIcon
                    icon={faSave}
                    className={`edit-icon ${hasChanges ? "clickable" : ""}`}
                    title="Save Profile Picture"
                    onClick={hasChanges ? handleSaveProfilePicture : null}
                  />
                </div>
                <div className="profile-picture-modal photo-modal">
                  <img
                    src={
                      renderProfilePhoto ||
                      uploadedProfilePhoto ||
                      profilePhoto ||
                      userPlaceHolder
                    }
                    alt="Profile"
                  />
                </div>
                <div className="upload-photo">
                  <input
                    type="file"
                    id="profilePictureInput"
                    name="profilePicture"
                    className="upload-button hidden"
                    accept="image/*"
                    onChange={debouncedProfilePhotoChange} // Use debounced change handler
                  />
                </div>
                <p>{success.profilePhoto}</p>
                {profilePhotoFile !== null && (
                  <button
                    type="submit"
                    className="save-button"
                    disabled={loading.profilePhoto}
                  >
                    {loading.profilePhoto ? "..." : "Save"}
                  </button>
                )}
              </form>

              <form onSubmit={handleSaveCoverPhoto}>
                <div className="edit-profile-header">
                  <h3>Cover Photo</h3>
                  <FontAwesomeIcon
                    icon={faSave}
                    className={`edit-icon ${hasChanges ? "clickable" : ""}`}
                    title="Save Cover Photo"
                    onClick={hasChanges ? handleSaveCoverPhoto : null}
                  />
                </div>
                <div className="cover-photo-modal photo-modal">
                  <img
                    src={
                      renderCoverPhoto ||
                      uploadedCoverPhoto ||
                      coverPhoto ||
                      userPlaceHolder
                    }
                    alt="Cover photo"
                  />
                </div>
                <div className="upload-photo">
                  <input
                    type="file"
                    id="coverPhotoInput"
                    name="coverPhoto"
                    className="upload-button hidden"
                    accept="image/*"
                    onChange={debouncedCoverPhotoChange} // Use debounced change handler
                  />
                </div>
                <p>{success.coverPhoto}</p>
                {coverPhotoFile !== null && (
                  <button
                    type="submit"
                    className="save-button"
                    disabled={loading.coverPhoto}
                  >
                    {loading.coverPhoto ? "..." : "Save"}
                  </button>
                )}
              </form>

              <form onSubmit={handleSaveProfileObject}>
                <div>
                  <div className="edit-profile-header">
                    <h3>Name</h3>
                    <p onClick={() => setEditNameMode(true)}>Edit</p>
                  </div>
                  {editNameMode ? (
                    <div className="form-container">
                      <input
                        type="text"
                        className="input-feed"
                        placeholder="Edit your name..."
                        value={editedName}
                        name="editedName"
                        required
                        onChange={(e) => setEditedName(e.target.value)}
                      />
                    </div>
                  ) : null}
                </div>

                <div>
                  <h3 className="edit-add-ons">Edit Additional Information</h3>
                  <div className="edit-profile-header">
                    <h3>Introduction</h3>
                    <p onClick={() => setEditIntroductionMode(true)}>Edit</p>
                  </div>
                  <span>{editedIntroduction}</span>
                  {editIntroductionMode ? (
                    <div className="form-container">
                      <textarea
                        className="input-feed"
                        placeholder="Describe yourself..."
                        value={editedIntroduction}
                        name="editedIntroduction"
                        onChange={(e) =>
                          setEditedIntroduction(e.target.value)
                        }
                      />
                    </div>
                  ) : null}
                </div>

                <div>
                  <div className="edit-profile-header">
                    <h3>Company</h3>
                    <p onClick={() => setEditCompanyMode(true)}>Edit</p>
                  </div>
                  <span>{editedCompany}</span>
                  {editCompanyMode ? (
                    <div className="form-container">
                      <textarea
                        className="input-feed"
                        placeholder="Edit your company..."
                        value={editedCompany}
                        name="editedCompany"
                        required
                        onChange={(e) => setEditedCompany(e.target.value)}
                      />
                    </div>
                  ) : null}
                </div>

                <div>
                  <div className="edit-profile-header">
                    <h3>Website</h3>
                    <p onClick={() => setEditWebsiteMode(true)}>Edit</p>
                  </div>
                  <span>{editedWebsite}</span>
                  {editWebsiteMode ? (
                    <div className="form-container">
                      <input
                        type="text"
                        className="input-feed"
                        placeholder="Edit your website..."
                        value={editedWebsite}
                        name="editedWebsite"
                        onChange={(e) => setEditedWebsite(e.target.value)}
                      />
                    </div>
                  ) : null}
                </div>

                <div>
                  <div className="edit-profile-header">
                    <h3>City</h3>
                    <p onClick={() => setEditCityMode(true)}>Edit</p>
                  </div>
                  <span>{editedCity}</span>
                  {editCityMode ? (
                    <div className="form-container">
                      <input
                        type="text"
                        className="input-feed"
                        placeholder="Edit your city..."
                        value={editedCity}
                        name="editedCity"
                        onChange={(e) => setEditedCity(e.target.value)}
                      />
                    </div>
                  ) : null}
                </div>

                <button type="submit" className="save-button">
                  Save
                </button>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProfileDetail;
