import React, { useState } from 'react';
import "../styles/Feed.scss";
import Profile from '../assets/wanda.jpg';
import Comment from '../assets/icons/commenticon.svg';
import Like from '../assets/icons/likeicon.svg';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Comments from './Comments';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

function Feed() {
  const [showModal, setShowModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [comment, setComment] = useState('');
  const [feedItems, setFeedItems] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleCommentModal = () => {
    setShowCommentModal(!showCommentModal);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (comment.trim()) {
      setFeedItems([...feedItems, { id: feedItems.length + 1, comment }]);
      setComment('');
    }
  };

  const handleDeletePost = () => {
   
    toggleModal();
  };

  return (
    <div className="feed-container">
      <FontAwesomeIcon icon={faEllipsisH} className="ellipsis-icon" onClick={toggleModal} />
      <div className="profile-feed-details">
        <div className="profile-info">
          <div className="profile-image">
            <img src={Profile} alt="Profile" />
          </div>
          <div className="name-time">
            <div className="name-icon">
              <h3>Wanda Zurbano</h3>
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
            <button>100 Likes</button>
          </div>
          <div className="comments">
            <span className="comment-icon">
              <img src={Comment} />
            </span>
            <button onClick={toggleCommentModal} className="comment-button">Comment</button>
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
            <button onClick={handleDeletePost} className="delete-button">Delete</button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={showCommentModal}
        onRequestClose={toggleCommentModal}
        contentLabel="Add Comment"
        className="modal-overlay"
        overlayClassName="modal-container"
      >

        {/* MODAL FOR COMMENT */}

        <div className="modal-content comment-modal-container">
          <div className="modal-header">
            <h2>Comments</h2>
            <FontAwesomeIcon icon={faTimes} className="logout-xmark"/>
            <Comments />
          </div>
          <div className="modal-body">
            <textarea
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button onClick={toggleCommentModal} className="cancel-button">Cancel</button>
            <button onClick={handleCommentSubmit} className="add-comment-button">Add Comment</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Feed;
