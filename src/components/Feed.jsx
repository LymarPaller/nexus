import React, { useState } from 'react';
import "../styles/Feed.scss";
import Profile from '../assets/wanda.jpg';
import Comment from '../assets/icons/commenticon.svg';
import Like from '../assets/icons/likeicon.svg';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

function Feed() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="feed-container">
      <div className="profile-feed-details">
        <div className="profile-info">
          <div className="profile-image">
            <img src={Profile} alt="Profile" />
          </div>
          <div className="name-time">
            <div className="name-icon">
              <h3>Wanda Zurbano</h3>
              <FontAwesomeIcon icon={faEllipsisH} className="ellipsis-icon" onClick={toggleModal} />
            </div>
            <p>1 minute ago</p>
          </div>
        </div>
        <div className="captions">
          <p>Pupparazzi caught me posing 📸</p>
        </div>
        <div className="post-image">
          <img src={Profile} alt="Profile" />
        </div>

        <div className="likes-comments">
          <div className="likes">
            <span className="like-icon"><img src={Like} /></span>
            <p>100 Likes</p>
          </div>
          <div className="comments">
            <span className="comment-icon"><img src={Comment} /></span>
            <p>50 Comments</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={toggleModal}
        contentLabel="Delete Post"
        className="modal-overlay"
        overlayClassName="modal-container"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2>Confirm Delete</h2>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this post?</p>
          </div>
          <div className="modal-footer">
            <button onClick={toggleModal} className="cancel-button">Cancel</button>
            <button onClick={() => { /* delete logic here ask sir lemar */ }} className="delete-button">Delete</button>
          </div>
        </div>
      </Modal>


    </div>
  )
}

export default Feed;
