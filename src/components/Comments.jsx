import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Profile from '../assets/wanda.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../app/useModal';
import '../styles/modals/modal.scss';
import '../styles/Comments.scss';
import axios from 'axios';
import { useFormik } from 'formik';

function Comments({ feedItems, postId, closeModal }) {

    const { isOpen: showDeleteModal, openModal: openDeleteModal, closeModal: closeDeleteModal } = useModal();
    const [commentToDelete, setCommentToDelete] = useState(null);
    // const [comment, setComment] = useState('');
    const [comments, setComments] = useState([])

    
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;

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
    

    const handleDeleteComment = async (commentId) => {
        try {
            const res = await axios.delete(`http://localhost:8000/api/v1/comments/${commentId}`);
            
            fetchFeed();
            closeDeleteModal();
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    
    const formik = useFormik({
        initialValues: {
        postId: postId,
        commentDescription: '',
        dateCommented: formattedDate,
        userId: '66',
        },
        onSubmit: async (values) => {
        try {
            const res = await axios.post('http://localhost:8000/api/v1/comments', values);
            console.log('Post successful: ', res.data);
            formik.resetForm();
            fetchFeed();
        } catch (error) {
            console.error('Posting comment failed: ', error)
        }
        }
    });

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
                                openDeleteModal(comment.id); // Open the delete modal
                                setCommentToDelete(comment.id)
                            }}>
                                <FontAwesomeIcon icon={faTrash} className='trash-icon' />
                            </span>
                        </div>
                    </div>
                </div>
                ))
            }
                
            <form onSubmit={formik.handleSubmit}>
                <div className="modal-body">
                    <textarea
                        id='commentDescription'
                        type="text"
                        placeholder="Write a comment..."
                        {...formik.getFieldProps('commentDescription')}
                    />
                </div>
                <div className="modal-footer">
                    <button className="add-comment-button" type="submit">
                        Add Comment
                    </button>
                </div>
            </form>

            {/* Confirmation Modal */}
            <div>
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
                            <button className="remove-btn" onClick={() => handleDeleteComment(commentToDelete)}>Delete</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Comments;
