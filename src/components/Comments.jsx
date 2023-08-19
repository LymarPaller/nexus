import React, { useState } from 'react';
import Modal from 'react-modal';
import Profile from '../assets/wanda.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../app/useModal';
import '../styles/modals/modal.scss';
import '../styles/Comments.scss';

function Comments({ feedItems }) {
  const { isOpen: showDeleteModal, openModal: openDeleteModal, closeModal: closeDeleteModal } = useModal();
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [comment, setComment] = useState('');
  
  console.log(feedItems)

  const handleDeleteComment = () => {
    if (commentToDelete !== null) {
      const updatedComments = feedItems.filter((item, index) => index !== commentToDelete);
      // you can update soon like this  setComments(updatedComments);
      setCommentToDelete(null);
      closeDeleteModal();
    }
  };
  

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (comment.trim()) {
      // Add logic to submit comment to the server or update state
      setComment('');
    }
  };

  return (
    <div className='list-comments'>
      <div className='profile'>
        {/* Rest of the profile info... */}
        {Array.isArray(feedItems) && feedItems.map((item, index) => (
          <div key={index} className='profile-image'>
            <img src={Profile} alt='Profile' />
            <div className='comment'>
              {/* Comment details */}
              <span className='remove-comment' onClick={() => {
                setCommentToDelete(index);
                openDeleteModal();
              }}>
                <FontAwesomeIcon icon={faTrash} className='trash-icon' />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Comment input */}
      <div className="modal-body">
        <textarea
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="modal-footer">
        <button onClick={handleCommentSubmit} className="add-comment-button">
          Add Comment
        </button>
      </div>

      {/* Delete Comment Confirmation Modal */}
      <Modal
        isOpen={showDeleteModal}
        onRequestClose={closeDeleteModal}
        className="modal-delete-comment"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        {/* Delete confirmation modal content */}
      </Modal>
    </div>
  );
}

export default Comments;
