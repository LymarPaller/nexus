// NewsFeed.js
import React, { useState } from 'react';
import "../styles/NewsFeed.scss";
import Feed from "./Feed";
import Profile from '../assets/wanda.jpg';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NewsFeed() {
    const [post, setPost] = useState('');
    const [feedItems, setFeedItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPost = {
            id: Date.now(),
            content: post,
            author: 'Wanda Zurbano',
            timestamp: new Date().toLocaleString(),
            likes: 0,
            comments: [],
        };

        setFeedItems([newPost, ...feedItems]);
        setPost('');
        setIsModalOpen(false); // Close the modal after submitting
    };

    const handleClickToPost = () => {
        setIsModalOpen(true);
    }

    const handleCancelPost = () => {
        setIsModalOpen(false);
        setPost(''); 
        // const backgroundSetClass = document.getElementsByClassName('background-overlay');
        // for (const bgclass of backgroundSetClass) {
        //     if(backgroundSetClass) {
        //         bgclass.classList.add('background-overlay-new');
        //         bgclass.classList.remove('background-overlay');
        //     } else {
        //         bgclass.classList.add('background-overlay-new');
        //         bgclass.classList.remove('background-overlay');
        //     }
        // }
    }

    return (
        <div className="news-feed-container">
            {isModalOpen && <div className="background-overlay" onClick={handleCancelPost}></div>}
            <div className={`create-post ${isModalOpen ? 'new-create-post' : ''}`}>
                <h4 className='create-post-header'>Create Post</h4>
                <FontAwesomeIcon icon={faTimes} className="logout-xmark" onClick={handleCancelPost}/>
                <div className="profile-pic">
                    <img src={Profile} alt="Profile" />
                </div>
                <div className='upload-photo'>
                    <input type="file" id="myFile" name="filename" className='upload-button' />
                </div>
                <form onSubmit={handleSubmit} className='form-container'>
                    <textarea
                        type="text"
                        className="input-feed"
                        placeholder="What's on your mind?"
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                        onClick={handleClickToPost}
                    />
                    <button type="submit">Post</button>
                </form>
                <button type="cancel" className="cancel-button" onClick={handleCancelPost}>Cancel</button>
            </div>
            <Feed />
        </div>
    );
}

export default NewsFeed;
