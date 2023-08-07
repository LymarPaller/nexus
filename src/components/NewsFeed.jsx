import React, { useState } from 'react';
import "../styles/NewsFeed.scss";
import Feed from "./Feed";
import Profile from '../assets/wanda.jpg';

function NewsFeed () {
    const [post, setPost] = useState('');
    const [feedItems, setFeedItems] = useState([]);

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
    };

    return (
        <>
        <div className="news-feed-container">
            <div className="create-post">
                <div className="profile-pic"> 
                <img src={Profile} alt="Profile" />
                </div>
                <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="input-feed"
                            placeholder="What's on your mind?"
                            value={post}
                            onChange={(e) => setPost(e.target.value)}
                        />
                        <button type="submit">Post</button>
                    </form>
            </div>
            <Feed/>
        </div>
        
        </>
    )
}

export default NewsFeed