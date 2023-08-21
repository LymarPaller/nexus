import React, { useState } from "react";
import "../styles/ProfileDetail.scss";
import "../styles/EditProfile.scss";
import LocationPin from "../assets/icons/location.svg";
import WebIcon from "../assets/icons/web.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPen,
  faTimes,
  faPlus,
  faEdit,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import userPlaceHolder from "../assets/icons/profile.svg";
import Modal from "react-modal";
import { useModal } from "../app/useModal";
import axios from "axios";

const PROFILE_WEBSITE = "https://www.instagram.com/wandaringmaltese/";

function WebsiteLink({ website }) {
  const handleWebsiteClick = () => {
    window.open(website, "_blank");
  };

  return (
    <span onClick={handleWebsiteClick}>
      <img
        src={WebIcon}
        alt='Website'
      />
      <p className='profile-website detail-container-other-details-paragraph'>
        {website}
      </p>
    </span>
  );
}

function ProfileDetail(props) {
  const {
    name,
    introduction,
    company,
    website,
    city,
    profilePhoto,
    coverPhoto,
    setReload,
  } = props;

  const [profilePhotos, setprofilePhoto] = useState(null);
  const [profilePhotoFile, setProfilePhotoFile] = useState(null);
  const [coverPhotos, setcoverPhoto] = useState(null);
  const [coverPhotoFile, setCoverPhotoFile] = useState(null);
  // main object
  const [profileObject, setProfileObject] = useState({});

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
  //plural

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
    setReload((prev) => !prev);
  };

  const handleSaveProfile = () => {
    // add save logic
    setHasChanges(false);
    closeEditModal();
  };

  const handleprofilePhotoChange = (e) => {
    const uploadedprofilePhoto = URL.createObjectURL(e.target.files[0]);
    setProfilePhotoFile(e.target.files[0]);
    setprofilePhoto(uploadedprofilePhoto);
    setHasChanges(true);
  };

  const handlecoverPhotoChange = (e) => {
    const uploadedcoverPhoto = URL.createObjectURL(e.target.files[0]);
    setCoverPhotoFile(e.target.files[0]);
    setcoverPhoto(uploadedcoverPhoto);
    setHasChanges(true);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileObject((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSaveProfilePhoto = async (e) => {
    e.preventDefault();
    try {
      if (!profilePhotoFile) return;
      const formData = new FormData();
      formData.append("profilePhoto", profilePhotoFile);
      setLoading((prev) => ({ ...prev, profilePhoto: true }));
      const update = await axios.post(
        `http://localhost:8000/api/v1/users/${localStorage.getItem(
          "id"
        )}?_method=PATCH`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setLoading((prev) => ({ ...prev, profilePhoto: false }));
      setSuccess((prev) => ({ ...prev, profilePhoto: "Saved Successfully" }));
      setProfilePhotoFile(null);

      setTimeout(() => {
        setSuccess((prev) => ({ ...prev, profilePhoto: "" }));
      }, 3000);
      // add the locals here
      console.log(update);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveCoverPhoto = async (e) => {
    e.preventDefault();
    try {
      if (!coverPhotoFile) return;
      const formData = new FormData();
      formData.append("coverPhoto", coverPhotoFile);
      setLoading((prev) => ({ ...prev, profilePhoto: true }));
      const update = await axios.post(
        `http://localhost:8000/api/v1/users/${localStorage.getItem(
          "id"
        )}?_method=PATCH`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setLoading((prev) => ({ ...prev, coverPhoto: false }));
      setSuccess((prev) => ({ ...prev, coverPhoto: "Saved Successfully" }));
      setCoverPhotoFile(null);

      setTimeout(() => {
        setSuccess((prev) => ({ ...prev, coverPhoto: "" }));
      }, 3000);
      console.log(update);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveProfileObject = async (e) => {
    e.preventDefault();
    try {
      const update = await axios.patch(
        `http://localhost:8000/api/v1/users/${localStorage.getItem("id")}`,
        profileObject
      );
      // do something kung success ang request
      console.log(update);
      closeEditModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='profile-main-container'>
      <div className='cover-photo'>
        <img
          src={
            coverPhoto
              ? `http://localhost:8000/images/${coverPhoto}?${new Date().getTime()}`
              : userPlaceHolder
          }
          alt='Cover'
        />
      </div>
      <div className='profile-photo'>
        <img
          src={
            profilePhoto
              ? `http://localhost:8000/images/${profilePhoto}?${new Date().getTime()}`
              : userPlaceHolder
          }
          alt='Profile'
        />
      </div>
      <div className='detail-container'>
        <h1 className='user-profile-name'>{name}</h1>
        <div className='detail-container-intro'>
          <p>{introduction}</p>
          <p>{company}</p>
        </div>
        <div className='detail-container-other-details'>
          <WebsiteLink website={website} />
          <span>
            <img
              src={LocationPin}
              alt='Location'
            />
            <p className='profile-location detail-container-other-details-paragraph'>
              {city}
            </p>
          </span>
          <div>
            <FontAwesomeIcon
              icon={faUserPen}
              className='edit-icon'
              title='Edit Profile'
              onClick={openEditModal}
            />
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <Modal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          className='edit-profile-modal'
          overlayClassName='modal-overlay'
          ariaHideApp={false}
        >
          <div className='modal-content-edit-profile'>
            <h2>Edit Profile</h2>
            <FontAwesomeIcon
              icon={faTimes}
              className='logout-xmark-edit close-svg'
              onClick={closeEditModal}
            />
            {/* Edit Profile*/}
            <div className='profile-edit-container'>
              {/* Profile Picture */}
              <form onSubmit={handleSaveProfilePhoto}>
                <div className='edit-profile-header'>
                  <h3>Profile picture</h3>
                  {/* <FontAwesomeIcon
                    icon={faSave}
                    className={`edit-icon ${hasChanges ? "clickable" : ""}`}
                    title='Save Profile Picture'
                    onClick={hasChanges ? handleSaveProfilePicture : null}
                  /> */}
                </div>
                <div className='profile-picture-modal photo-modal'>
                  <img
                    src={
                      profilePhotos
                        ? profilePhotos
                        : `http://localhost:8000/images/${profilePhoto}` ||
                          userPlaceHolder
                    }
                    alt='Profile'
                  />
                </div>
                <div className='upload-photo'>
                  <input
                    type='file'
                    id='profilePictureInput'
                    name='profilePicture'
                    className='upload-button hidden'
                    accept='image/*'
                    onChange={handleprofilePhotoChange}
                  />
                </div>
                <p>{success.profilePhoto}</p>
                {profilePhotoFile !== null && (
                  <button
                    type='submit'
                    className='save-button'
                    disabled={loading.profilePhoto}
                  >
                    {loading.profilePhoto ? "..." : "Save"}
                  </button>
                )}
              </form>

              {/* Cover Photo */}
              <form onSubmit={handleSaveCoverPhoto}>
                <div className='edit-profile-header'>
                  <h3>Cover Photo</h3>
                  {/* <FontAwesomeIcon
                  icon={faSave}
                  className={`edit-icon ${hasChanges ? "clickable" : ""}`}
                  title='Save Cover Photo'
                  onClick={hasChanges ? handleSaveCoverPhoto : null}
                /> */}
                </div>
                <div className='cover-photo-modal photo-modal'>
                  <img
                    src={
                      coverPhotos
                        ? coverPhotos
                        : `http://localhost:8000/images/${coverPhoto}` ||
                          userPlaceHolder
                    }
                    alt='Cover photo'
                  />
                </div>
                <div className='upload-photo'>
                  <input
                    type='file'
                    id='coverPhotoInput'
                    name='coverPhoto'
                    className='upload-button hidden'
                    accept='image/*'
                    onChange={handlecoverPhotoChange}
                  />
                </div>
                <p>{success.coverPhoto}</p>
                {coverPhotoFile !== null && (
                  <button
                    type='submit'
                    className='save-button'
                    disabled={loading.profilePhoto}
                  >
                    {loading.profilePhoto ? "..." : "Save"}
                  </button>
                )}
              </form>

              {/* editable text fields */}
              <form onSubmit={handleSaveProfileObject}>
                {/* name */}
                <div>
                  <div className='edit-profile-header'>
                    <h3>Name</h3>
                    <p onClick={() => setEditNameMode(true)}>Edit</p>
                  </div>
                  {editNameMode ? (
                    <div className='form-container'>
                      <input
                        type='text'
                        className='input-feed'
                        placeholder='Edit your name...'
                        defaultValue={name}
                        name='name'
                        required
                        onChange={handleProfileChange}
                      />
                    </div>
                  ) : null}
                </div>
                {/* Introduction */}
                <div>
                  <h3 className='edit-add-ons'>Edit Additional Information</h3>
                  <div className='edit-profile-header'>
                    <h3>Introduction</h3>
                    <p onClick={() => setEditIntroductionMode(true)}>Edit</p>
                  </div>
                  <span>{introduction}</span>
                  {editIntroductionMode ? (
                    <div className='form-container'>
                      <textarea
                        className='input-feed'
                        placeholder='Describe yourself...'
                        defaultValue={introduction}
                        name='introduction'
                        onChange={handleProfileChange}
                      />
                    </div>
                  ) : null}
                </div>

                {/* Company */}
                <div>
                  <div className='edit-profile-header'>
                    <h3>Company</h3>
                    <p onClick={() => setEditCompanyMode(true)}>Edit</p>
                  </div>
                  <span>{company}</span>
                  {editCompanyMode ? (
                    <div className='form-container'>
                      <textarea
                        className='input-feed'
                        placeholder='Edit your company...'
                        defaultValue={company}
                        name='company'
                        required
                        onChange={handleProfileChange}
                      />
                    </div>
                  ) : null}
                </div>

                {/* Website */}
                <div>
                  <div className='edit-profile-header'>
                    <h3>Website</h3>
                    <p onClick={() => setEditWebsiteMode(true)}>Edit</p>
                  </div>
                  <span>{website}</span>
                  {editWebsiteMode ? (
                    <div className='form-container'>
                      <input
                        type='text'
                        className='input-feed'
                        placeholder='Edit your website...'
                        name='websites'
                        defaultValue={website}
                        onChange={handleProfileChange}
                      />
                    </div>
                  ) : null}
                </div>

                {/* City */}
                <div>
                  <div className='edit-profile-header'>
                    <h3>City</h3>
                    <p onClick={() => setEditCityMode(true)}>Edit</p>
                  </div>
                  <span>{city}</span>
                  {editCityMode ? (
                    <div className='form-container'>
                      <input
                        type='text'
                        className='input-feed'
                        placeholder='Edit your city...'
                        name='city'
                        defaultValue={city}
                        onChange={handleProfileChange}
                      />
                    </div>
                  ) : null}
                </div>

                <button
                  type='submit'
                  className='save-button'
                >
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
