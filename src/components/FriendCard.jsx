import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faUserMinus, faUserPlus, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';
import '../styles/EditProfile.scss';
import LocationPin from "../assets/icons/location.svg";
import WebIcon from "../assets/icons/web.svg";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Feed from "./Feed";


function FriendCard(props) {
  const { friendId, 
    name, 
    introduction, 
    city, 
    profilePhoto, 
    company, 
    coverPhoto, 
    websites,
    feedArray} = props;

  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showUnfollowModal, setShowUnfollowModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

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
        className="profile-modal main-modal-profile" // Add a custom class for styling
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <div className="profile-main-container search-modal-profile">
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
              <p>
                <FontAwesomeIcon icon={faBriefcase} /> Works at <strong>{company}</strong>
              </p>
            </div>
            <div className="detail-container-other-details">
              <span>
                <img src={WebIcon} alt="Location" />
                <a href='' target="_blank" rel="noopener noreferrer">{websites}</a>
              </span>
              <span>
                <img src={LocationPin} alt="Location" />
                <p className="profile-location detail-container-other-details-paragraph">
                  {city}
                </p>
              </span>
            </div>
          </div>
        <button className="close-modal-profiledetails" onClick={() => setShowProfileModal(false)} >
          Close
        </button>
        </div>
        <div className="feed-container-main">
        {
          feedArray.map(feedArr=><Feed 
            key={feedArr.id}
            postDescription={feedArr.post_description}
            dateCreated={feedArr.date_created}
            imgPost={feedArr.img_post}
            postId={feedArr.id}
            author={name}
            img={profilePhoto}
          />)
        }
        </div>
        {/* <Feed /> */}
      </ReactModal>
    </>
  );
}

export default FriendCard;
