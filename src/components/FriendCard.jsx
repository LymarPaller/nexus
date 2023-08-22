import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SearchFriends.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';
import '../styles/EditProfile.scss'; 

function FriendCard(props) {
  const { friendId, name, introduction, city, profilePhoto } = props;

  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showUnfollowModal, setShowUnfollowModal] = useState(false); 

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
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default FriendCard;
