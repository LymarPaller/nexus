import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Profile from '../assets/wanda.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../app/useModal';
import '../styles/modals/modal.scss';
import '../styles/Comments.scss';
import axios from 'axios';

function Comments({ feedItems, postId }) {

    const { isOpen: showDeleteModal, openModal: openDeleteModal, closeModal: closeDeleteModal } = useModal();
    const [commentToDelete, setCommentToDelete] = useState(null);
    // const [comment, setComment] = useState('');
    const [comments, setComments] = useState([])

    const fetchFeed = async () => {
        try {
            const res = await axios(`http://localhost:8000/api/v1/comments?postId=${postId}`)
            setComments(res.data.data)

        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    }

    useEffect(() => {
        fetchFeed();
    }, []);
    

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
        // if (comment.trim()) {
        // // Add logic to submit comment to the server or update state
        // setComment('');
        // }
    };

    console.log(comments)

    return (
        <div className='list-comments'>

            {comments.map((comment)=>(
                <div className='profile' key={comment.id}>
                    <div className='profile-image'>
                        <img src={comment.user.profilePhoto} alt='Profile' />
                        <div className='comment'>
                            <h5>{comment.user.name}</h5>
                            <div>
                                <p>{comment.commentDescription}</p>
                            </div>
                            <span className='remove-comment' onClick={() => {
                                setCommentToDelete();
                                openDeleteModal(comment.id); // Open the delete modal
                            }}>
                                <FontAwesomeIcon icon={faTrash} className='trash-icon' />
                            </span>
                        </div>
                    </div>
                </div>
                ))
            }
                

            <div className="modal-body">
                <textarea
                    type="text"
                    placeholder="Write a comment..."
                    // value={comment}
                    // onChange={(e) => setComment(e.target.value)}
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
