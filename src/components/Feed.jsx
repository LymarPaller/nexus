import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../styles/Feed.scss';
import Profile from '../assets/wanda.jpg';
import Comment from '../assets/icons/commenticon.svg';
import Like from '../assets/icons/likeicon.svg';
import Comments from './Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faTimes, faTrashAlt, faEdit, faBookmark } from '@fortawesome/free-solid-svg-icons';
import LikeButton from './LikeButton';
import { useModal } from '../app/useModal';
import axios from 'axios';

function Feed(props) {
  const {imgPost, postDescription, dateCreated, author, img, postId} = props

  const {
    isOpen: showOptionsModal,
    openModal: toggleOptionsModal,
    closeModal: closeOptionsModal
  } = useModal();
  const {
    isOpen: showDeleteModal,
    openModal: toggleDeleteModal,
    closeModal: closeDeleteModal
  } = useModal();
  const {
    isOpen: showCommentModal,
    openModal: toggleCommentModal,
    closeModal: closeCommentModal
  } = useModal();
  const {
    isOpen: showEditCaptionModal,
    openModal: toggleEditCaptionModal,
    closeModal: closeEditCaptionModal
  } = useModal();
  const {
    isOpen: showSaveModal,
    openModal: toggleSaveModal,
    closeModal: closeSaveModal
  } = useModal();
  const [editedCaption, setEditedCaption] = useState('Pupparazzi caught me posing 📸');
  const [editedCaptionModal, setEditedCaptionModal] = useState(editedCaption);

  const handleDeletePost = () => {
    toggleDeleteModal();
    // Logic for delete post will be added here soon
  };

  const handleEditCaption = () => {
    setEditedCaptionModal(editedCaption);
    toggleOptionsModal();
    toggleEditCaptionModal();
    closeOptionsModal();
    closeCommentModal();
  };

  const handleSaveCaption = () => {
    setEditedCaption(editedCaptionModal);
    toggleEditCaptionModal();
    closeOptionsModal();
    closeCommentModal();
    closeEditCaptionModal();
  };

  const handleSavePost = () => {
    toggleOptionsModal();
    toggleSaveModal();
    closeOptionsModal();
    closeCommentModal();
    closeEditCaptionModal();
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
            <img src={img} alt="Profile" />
          </div>
          <div className="name-time">
            <div className="name-icon">
              <h3>{author}</h3>
            </div>
            <p>{dateCreated}</p>
          </div>
        </div>
        <div className="captions">
          <p>{postDescription}</p>
        </div>
        <div className="post-image">
          {/* Replace this with actual post props image soon */}
          <img src={imgPost} alt="Post" />
        </div>
        <div className="likes-comments">
          <div className="likes">
            <span className="like-icon">
              <img src={Like} alt="Like Icon" />
            </span>
            <LikeButton postId={postId}/>
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
        contentLabel="Options"
        className="modal-overlay"
        overlayClassName="modal-container"
        ariaHideApp={false}
      >
        <div className="modal-content">
          <div className="modal-header-options">
            <h2>Options</h2>
            <FontAwesomeIcon icon={faTimes} className="logout-xmark-options" onClick={closeOptionsModal} />
          </div>
          <div className="modal-body-edit-comment">
            <div className="options-list">

              <div className="option edit-caption" onClick={handleEditCaption}>
                <span className="option-icon">
                  <FontAwesomeIcon icon={faEdit} />
                </span>
                <span className="option-label">Edit Caption</span>
              </div>

              <div className="option delete-caption" onClick={handleDeletePost}>
                <span className="option-icon-delete">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </span>
                <span className="option-label-delete">Delete Post</span>
              </div>

              <div className="option" onClick={handleSavePost}>
                <span className="option-icon">
                  <FontAwesomeIcon icon={faBookmark} />
                </span>
                <span className="option-label">Save Post</span>
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
        ariaHideApp={false}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2>Edit Caption</h2>
            <FontAwesomeIcon icon={faTimes} className="logout-xmark-options" onClick={closeEditCaptionModal} />
          </div>
          <div className="modal-body-edit-caption">
            <textarea
              value={editedCaptionModal}
              onChange={(e) => setEditedCaptionModal(e.target.value)}
              className="caption-textarea"
            />
            <div>
              <button onClick={handleSaveCaption} className="save-caption-button">
                Save
              </button>
            </div>
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
        ariaHideApp={false}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2>Confirm Delete</h2>
            <FontAwesomeIcon icon={faTimes} className="logout-xmark-options" onClick={closeDeleteModal} />
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this post?</p>
          </div>
          <div className="modal-footer">
            <button onClick={closeDeleteModal} className="add-btn">
              Cancel
            </button>
            <button onClick={handleDeletePost} className="delete-button">
              Delete
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showSaveModal}
        onRequestClose={closeSaveModal}
        contentLabel="Save Post"
        className="modal-overlay"
        overlayClassName="modal-container"
        ariaHideApp={false}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2>Save Post</h2>
            <FontAwesomeIcon icon={faTimes} className="logout-xmark-options" onClick={closeSaveModal} />
          </div>
          <div className="modal-body">
            <p>Add this to your saved items?</p>
          </div>
          <div className="modal-footer">
            <button onClick={handleSavePost} className="add-btn">
              Save
            </button>
            <button onClick={closeSaveModal} className="delete-button">
              Cancel
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
        ariaHideApp={false}
      >
        <div className="modal-content comment-modal-container">
          <div className="modal-header">
            <h2>Comments</h2>
            <FontAwesomeIcon
              icon={faTimes}
              className="logout-xmark"
              onClick={closeCommentModal}
            />
            <Comments postId={postId}/>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Feed;
