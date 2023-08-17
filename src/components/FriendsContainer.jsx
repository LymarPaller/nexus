import React, { useState } from "react";
import Profile from '../assets/wanda.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faUserTimes, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';
import { useModal } from '../app/useModal';

function FriendsContainer() {
    const [friends, setFriends] = useState([
        { name: 'Klane Zurbano' },
        { name: 'Ryan Azur' },
        { name: 'Kodego PH' },
        { name: 'Lymar Paller' },
        { name: 'Riya Villamor' }
    ]);

    const optionsModal = useModal();
    const unfollowModal = useModal();
    const unfriendModal = useModal();

    const handleUnfollow = () => {
        // Implement unfollow logic here
        unfollowModal.closeModal();
        
    };

    const handleUnfriend = () => {
        // Implement unfriend logic here
        unfriendModal.closeModal();
    };

    return (
        <div className="friend-container">
            {friends.map((friend, index) => (
                <div className="online-friends" key={index}>
                    <div className="aside-right-image">
                        <img src={Profile} alt="Profile" />
                    </div>
                    <div className="friend-details">
                        <span className="friend-name">{friend.name}
                            <FontAwesomeIcon
                                icon={faEllipsisH}
                                className="ellipsis-icon"
                                onClick={optionsModal.openModal}
                            />
                        </span>
                    </div>
            
                    <Modal
                        isOpen={optionsModal.isOpen}
                        onRequestClose={optionsModal.closeModal}
                        className="modal-options"
                        overlayClassName="modal-overlay"
                        ariaHideApp={false}
                    >
                        {/* Options Modal content */}
                        <div className="modal-content">
                            <button className="add-btn" onClick={unfollowModal.openModal}>
                                <FontAwesomeIcon icon={faUserTimes}  />
                                Unfollow
                            </button>
                            <button className="remove-btn" onClick={unfriendModal.openModal}>
                                <FontAwesomeIcon icon={faUserMinus} />
                                Unfriend
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

                    <Modal
                        isOpen={unfriendModal.isOpen}
                        onRequestClose={unfriendModal.closeModal}
                        className="modal-delete-comment"
                        overlayClassName="modal-overlay"
                        ariaHideApp={false}
                    >
                        {/* Unfriend Modal content */}
                        <div className="modal-content">
                            <p>Are you sure you want to unfriend this user?</p>
                            <div className="modal-buttons">
                                <button className="add-btn" onClick={unfriendModal.closeModal}>Cancel</button>
                                <button className="remove-btn" onClick={handleUnfriend}>
                                    <FontAwesomeIcon icon={faUserMinus} className="icon" />
                                    Unfriend
                                </button>
                            </div>
                        </div>
                    </Modal>
                </div>
            ))}
        </div>
    );
}

export default FriendsContainer;
