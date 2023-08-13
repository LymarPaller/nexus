import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/Feed.scss';
import Profile from '../assets/wanda.jpg';
import Comment from '../assets/icons/commenticon.svg';
import Like from '../assets/icons/likeicon.svg';
import Comments from './Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faTimes, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import LikeButton from './LikeButton';
import { useModal } from '../app/useModal';

function Feed() {
  const { isOpen: showOptionsModal, openModal: toggleOptionsModal, closeModal: closeOptionsModal } = useModal();
  const { isOpen: showDeleteModal, openModal: toggleDeleteModal, closeModal: closeDeleteModal } = useModal();
  const { isOpen: showCommentModal, openModal: toggleCommentModal, closeModal: closeCommentModal } = useModal();
  const { isOpen: showEditCaptionModal, openModal: toggleEditCaptionModal, closeModal: closeEditCaptionModal } = useModal();
  const [editedCaption, setEditedCaption] = useState('Pupparazzi caught me posing 📸');
  const [editedCaptionModal, setEditedCaptionModal] = useState(editedCaption);

  const handleDeletePost = () => {
    toggleDeleteModal();
  };

  const handleEditCaption = () => {
    setEditedCaptionModal(editedCaption);
    toggleOptionsModal();
    toggleEditCaptionModal();
  };

  const handleSaveCaption = () => {
    setEditedCaption(editedCaptionModal);
    toggleEditCaptionModal();
  };

  return (
    <div className="feed-container">
      <FontAwesomeIcon
        icon={faEllipsisH}
        className="ellipsis-icon"
        onClick={toggleOptionsModal}
      />
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
          <p>{editedCaption}</p>
        </div>
        <div className="post-image">
          {/* Replace this with actual post image soon */}
          <img src={Profile} alt="Post" />
        </div>
        <div className="likes-comments">
          <div className="likes">
            <span className="like-icon">
              <img src={Like} alt="Like Icon" />
            </span>
            <LikeButton />
          </div>
          <div className="comments">
            <span className="comment-icon">
              <img src={Comment} alt="Comment Icon" />
            </span>
            <button onClick={toggleCommentModal} className="comment-button">
              Comment
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showOptionsModal}
        onRequestClose={closeOptionsModal}
        contentLabel="Edit and Delete Post"
        className="modal-overlay"
        overlayClassName="modal-container"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2>Edit and Delete Post</h2>
          </div>
          <div className="modal-body">
            <div className="options-list">
              <div className="option" onClick={handleDeletePost}>
                <span className="option-icon">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </span>
                <span className="option-label">Delete Post</span>
              </div>
              <div className="option" onClick={handleEditCaption}>
                <span className="option-icon">
                  <FontAwesomeIcon icon={faEdit} />
                </span>
                <span className="option-label">Edit Caption</span>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={toggleOptionsModal} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showEditCaptionModal}
        onRequestClose={closeEditCaptionModal}
        contentLabel="Edit Caption"
        className="modal-overlay"
        overlayClassName="modal-container"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2>Edit Caption</h2>
          </div>
          <div className="modal-body">
            <textarea
              value={editedCaptionModal}
              onChange={(e) => setEditedCaptionModal(e.target.value)}
              className="caption-textarea"
            />
            <button onClick={handleSaveCaption} className="save-caption-button">
              Save
            </button>
          </div>
          <div className="modal-footer">
            <button onClick={toggleEditCaptionModal} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showDeleteModal}
        onRequestClose={closeDeleteModal}
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
            <button onClick={toggleDeleteModal} className="cancel-button">
              Cancel
            </button>
            <button onClick={handleDeletePost} className="delete-button">
              Delete
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showCommentModal}
        onRequestClose={closeCommentModal}
        contentLabel="Add Comment"
        className="modal-overlay"
        overlayClassName="modal-container"
      >
        <div className="modal-content comment-modal-container">
          <div className="modal-header">
            <h2>Comments</h2>
            <FontAwesomeIcon
              icon={faTimes}
              className="logout-xmark"
              onClick={closeCommentModal}
            />
            <Comments />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Feed;
