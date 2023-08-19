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
              <div key={comment.id} className='profile-image'>
                  <img src={Profile} alt='Profile' />
                  <div className='comment'>
                      <h5>{comment.name}</h5>
                      <div>
                          <p>{comment.text}</p>
                      </div>
                      <span className='remove-comment' onClick={() => {
                          setCommentToDelete(comment.id);
                          openDeleteModal(); // Open the delete modal
                      }}>
                          <FontAwesomeIcon icon={faTrash} className='trash-icon' />
                      </span>
                  </div>
              </div>
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
                <button onClick={handleCommentSubmit} className="add-comment-button">
                    Add Comment
                </button>
            </div>

            {/* Confirmation Modal */}
            <Modal
                isOpen={showDeleteModal}
                onRequestClose={closeDeleteModal}
                className="modal-delete-comment"
                overlayClassName="modal-overlay"
                ariaHideApp={false}
            >
                <div className="logout-header">
                    <h5>Delete Confirmation</h5>
                    <button
                        className="modal-close-button"
                        onClick={closeDeleteModal} // Close the modal on button click
                    >
                    </button>
                </div>
                <div className="modal-content">
                    <p>Are you sure you want to delete this comment?</p>
                    <div className="modal-buttons">
                        <button className="add-btn" onClick={closeDeleteModal}>Cancel</button>
                        <button className="remove-btn" onClick={handleDeleteComment}>Delete</button>
                    </div>
                </div>
            </Modal>
        </div>
  );
}

export default Comments;
