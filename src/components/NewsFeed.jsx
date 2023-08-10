import React, { useState } from 'react';
import Modal from 'react-modal';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from '../assets/wanda.jpg';
import '../styles/NewsFeed.scss';
import Feed from './Feed';

function NewsFeed() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [postText, setPostText] = useState('');

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handlePost = (event) => {
        event.preventDefault();
        console.log('Posted:', postText);

         
        setPostText('');
        closeModal();
    };

    return (
        <>
            <div className="news-feed-container">
                <div className='create-post'>
                    <h4 className='create-post-header'>Create Post</h4>
                    <div className="profile-pic">
                        <img src={Profile} alt="Profile" />
                    </div>
                    <textarea
                        onClick={openModal}
                        className="input-feed"
                        placeholder="What's on your mind?"
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                    />
                    <button onClick={openModal} className="cancel-button">Cancel</button>
                </div>
                <Feed />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="new-create-post"
                overlayClassName="modal-overlay"
            >
                <h4 className='create-post-header'>Create Post</h4>
                <FontAwesomeIcon icon={faTimes} className="logout-xmark" onClick={closeModal} />
                <div className="profile-pic">
                    <img src={Profile} alt="Profile" />
                </div>
                <div className='upload-photo'>
                    <input type="file" id="myFile" name="filename" className='upload-button' />
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
        </>
    );
}

export default NewsFeed;
