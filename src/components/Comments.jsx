import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/Comments.scss';
import Profile from '../assets/wanda.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [commentToDelete, setCommentToDelete] = useState(null);

    const openDeleteModal = (commentId) => {
        setShowDeleteModal(true);
        setCommentToDelete(commentId);
    };

    const handleDeleteComment = () => {
        if (commentToDelete) {
            const updatedComments = comments.filter(comment => comment.id !== commentToDelete);
            setComments(updatedComments);
        }
        setShowDeleteModal(false);
        setCommentToDelete(null);
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
                            <span className='remove-comment' onClick={() => openDeleteModal(comment.id)}>
                                <FontAwesomeIcon icon={faTrash} className='trash-icon' />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            {/* Confirmation Modal */}
            <Modal
                isOpen={showDeleteModal}
                onRequestClose={() => setShowDeleteModal(false)}
                className="modal"
                overlayClassName="modal-overlay"
            >
                <div className="logout-header">
                    <h5>Delete Confirmation</h5>
                    <button
                        className="modal-close-button"
                        onClick={() => setShowDeleteModal(false)}
                    >
                        {/* <FontAwesomeIcon icon={faTimes} className="logout-xmark" /> */}
                    </button>
                </div>
                <div className="modal-content">
                    <p>Are you sure you want to delete this comment?</p>
                    <div className="modal-buttons">
                        <button className="add-btn" onClick={() => setShowDeleteModal(false)}>Cancel</button>
                        <button className="remove-btn" onClick={handleDeleteComment}>Delete</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Comments;
