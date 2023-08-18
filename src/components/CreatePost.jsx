import React from 'react';
import Modal from 'react-modal';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from '../assets/wanda.jpg';

function CreatePostModal({ isOpen, closeModal, postText, setPostText, handlePost }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="new-create-post"
            overlayClassName="modal-overlay"
            ariaHideApp={false}
        >
            <div className='create-post-header-container'>
                <h4 className='create-post-header'>Create Post</h4>
            </div>
            <FontAwesomeIcon icon={faTimes} className="logout-xmark" onClick={closeModal} />
            <div className="profile-pic">
                <img src={Profile} alt="Profile" />
                <h5>Wanda Zurbano</h5>
            </div>
            <div className='upload-photo'>
                <input type="file" id="myFile" name="filename" className='upload-button' accept="image/*"/>
            </div>
            <form className='form-container' onSubmit={handlePost}>
                <textarea
                    className="input-feed"
                    placeholder="What's on your mind?"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                />
                <button type="submit" className="post-button">Post</button>
            </form>
            <button onClick={closeModal} className="cancel-button">Cancel</button>
        </Modal>
    );
}

export default CreatePostModal;
