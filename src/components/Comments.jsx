import React, { useState } from 'react';
import Modal from 'react-modal';
import Profile from '../assets/wanda.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../app/useModal'; 
import '../styles/modals/modal.scss';
import '../styles/Comments.scss';

function Comments() {
    const initialComments = [
        {
            id: 1,
            name: 'Riya Villamor',
            text: 'That dog is adorable!',
        },
        {
            id: 2,
            name: 'Lymar Paller',
            text: 'I want to adopt this dog! Can I?',
        },
        {
            id: 3,
            name: 'Klane Zurbano',
            text: 'This dog reminds me of my furry friend!',
        },
    ];

    const [comments, setComments] = useState(initialComments);
    const { isOpen: showDeleteModal, openModal: openDeleteModal, closeModal: closeDeleteModal } = useModal();
    const [commentToDelete, setCommentToDelete] = useState(null);
    const [comment, setComment] = useState('');
    const [feedItems, setFeedItems] = useState([]);

    const handleDeleteComment = () => {
        if (commentToDelete) {
            const updatedComments = comments.filter(comment => comment.id !== commentToDelete);
            setComments(updatedComments);
        }
        closeDeleteModal(); // Close the delete modal
        setCommentToDelete(null);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (comment.trim()) {
            const newComment = {
                id: comments.length + 1,
                name: 'Wanda Zurbano',
                text: comment,
            };
            setFeedItems([...feedItems, { id: feedItems.length + 1, comment }]);
            setComments([...comments, newComment]);
            setComment('');
        }
    };

    return (
        <div className='list-comments'>
            <div className='profile'>
                {comments.map((comment) => (
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
                ))}
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
