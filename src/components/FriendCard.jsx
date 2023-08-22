import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';
import '../styles/EditProfile.scss';
import LocationPin from "../assets/icons/location.svg";
import WebIcon from "../assets/icons/web.svg";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


function FriendCard(props) {
  const { friendId, name, introduction, city, profilePhoto } = props;

  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showUnfollowModal, setShowUnfollowModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);


  const coverPhoto = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*";
  const company = "Nexus Kodego";
  const website = "https://kodego.com";
  const LocationPin = "../assets/icons/location.svg";
  const openEditModal = () => {

  };

  const handleFollowClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsFollowing(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleUnfollowClick = () => {
    setShowUnfollowModal(true);
  };

  const handleConfirmUnfollow = () => {
    setIsFollowing(false);
    setShowUnfollowModal(false);
  };

  const openProfileModal = () => {
    setShowProfileModal(true);
  };

  return (
    <>
      <Link>
        <div className="card">
          <div className="picture-container">
            <img src={profilePhoto} alt="" />
          </div>
          <div className="details-container">
            <div>
              <h1>{name}</h1>
            </div>
            <div>
              <p>{introduction}</p>
              <p>{city}</p>
            </div>
            <div>
              {isLoading ? (
                <button disabled>
                  <FontAwesomeIcon icon={faSpinner} spin /> Loading
                </button>
              ) : isFollowing ? (
                <>
                  <button onClick={handleUnfollowClick}>Following</button>
                  {/* Unfollow Confirmation Modal */}
                  <ReactModal
                    isOpen={showUnfollowModal}
                    onRequestClose={() => setShowUnfollowModal(false)}
                    className="modal-unfollow"
                    overlayClassName="modal-overlay"
                    ariaHideApp={false}
                  >
                    <div className="modal-content">
                      <p>Are you sure you want to unfollow this user?</p>
                      <div className="modal-buttons">
                        <button className="add-btn" onClick={() => setShowUnfollowModal(false)}>Cancel</button>
                        <button className="remove-btn" onClick={handleConfirmUnfollow}>
                          <FontAwesomeIcon icon={faUserMinus} /> Unfollow
                        </button>
                      </div>
                    </div>
                  </ReactModal>
                </>
              ) : (
                <button onClick={handleFollowClick}>
                  <FontAwesomeIcon icon={faUserPlus} /> Follow
                </button>
              )}

              <button onClick={openProfileModal}> <FontAwesomeIcon icon={faInfoCircle} />Details</button>
            </div>
          </div>
        </div>
      </Link>

      {/* Profile Details Modal */}
      <ReactModal
        isOpen={showProfileModal}
        onRequestClose={() => setShowProfileModal(false)}
        className="profile-modal" // Add a custom class for styling
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <div className="profile-main-container">
          <div className="cover-photo">
            <img src={coverPhoto} alt="Cover" />
          </div>
          <div className="profile-photo">
            <img src={profilePhoto} alt="Profile" />
          </div>
          <div className="detail-container">
            <h1 className="user-profile-name">{name}</h1>
            <div className="detail-container-intro">
              <p>{introduction}</p>
              <p>{company}</p>
            </div>
            <div className="detail-container-other-details">
              <a href={WebIcon} target="_blank" rel="noopener noreferrer">Website</a>
              <span>
                <img src={LocationPin} alt="Location" />
                <p className="profile-location detail-container-other-details-paragraph">
                  {city}
                </p>
              </span>
              {/* <div>
                <FontAwesomeIcon
                  icon={faUserMinus}
                  className="edit-icon"
                  title="Edit Profile"
                  onClick={openEditModal}
                />
              </div> */}
            </div>
          </div>
        </div>
        <button classname="add-btn" onClick={() => setShowProfileModal(false)} >
          Close
        </button>
      </ReactModal>
    </>
  );
}

export default FriendCard;
