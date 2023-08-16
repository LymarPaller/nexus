import React, { useState } from 'react';
import Profile from '../assets/wanda.jpg';
import '../styles/NewsFeed.scss';
import Feed from './Feed';
import { useModal } from '../app/useModal';
import CreatePostModal from '../components/CreatePost';

function NewsFeed() {
    const { isOpen, openModal, closeModal } = useModal();
    const [postText, setPostText] = useState('');


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
                    <div className='post-text-area-container'>
                        <textarea
                            onClick={openModal}
                            className="input-feed"
                            placeholder="What's on your mind?"
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                        />
                    </div>
                    <button onClick={openModal} className="cancel-button">Cancel</button>
                </div>
                <Feed />
            </div>
            {/* Using the extracted CreatePostModal component */}
            <CreatePostModal
                isOpen={isOpen}
                closeModal={closeModal}
                postText={postText}
                setPostText={setPostText}
                handlePost={handlePost}
            />
        </>
    );
}

export default NewsFeed;
