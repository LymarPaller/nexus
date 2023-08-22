import React, { useEffect, useState } from "react";
import Profile from '../assets/wanda.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faUserTimes, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';
import { useModal } from '../app/useModal';
import axios from "axios";
import { Link } from "react-router-dom";


function FriendsContainer({ followerName, profilePhoto, followerUserId, idfollower}) {
    const optionsModal = useModal();
    const unfollowModal = useModal();

    const handleUnfollow = () => {
        optionsModal.closeModal();
        unfollowModal.closeModal();
    };

    return (
        <div className="online-friends">
            <div className="aside-right-image">
                <img src={profilePhoto} alt="Profile" />
            </div>
            <div className="friend-details">
                <Link to={`/profile/${followerUserId}`} className="friend-name">
                    {followerName}
                </Link>
                <FontAwesomeIcon
                    icon={faEllipsisH}
                    className="ellipsis-icon"
                    onClick={optionsModal.openModal}
                />
            </div>


            <Modal
                isOpen={optionsModal.isOpen}
                onRequestClose={optionsModal.closeModal}
                className="modal-options"
                overlayClassName="modal-overlay"
                ariaHideApp={false}
            >
                {/* Options Modal content */}
                <div className="modal-content friend-option">
                    <button className="add-btn" onClick={unfollowModal.openModal}>
                        <FontAwesomeIcon icon={faUserTimes} />
                        Unfollow
                    </button>
                    <button className="remove-btn" onClick={optionsModal.closeModal}>
                        Close
                    </button>
                </div>
            </Modal>

            <Modal
                isOpen={unfollowModal.isOpen}
                onRequestClose={unfollowModal.closeModal}
                className="modal-delete-comment"
                overlayClassName="modal-overlay"
                ariaHideApp={false}
            >
                {/* Unfollow Modal content */}
                <div className="modal-content">
                    <p>Are you sure you want to unfollow this user?</p>
                    <div className="modal-buttons">
                        <button className="add-btn" onClick={unfollowModal.closeModal}>Cancel</button>
                        <button className="remove-btn" onClick={handleUnfollow}>
                            <FontAwesomeIcon icon={faUserTimes} className="icon" />
                            Unfollow
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default FriendsContainer;
