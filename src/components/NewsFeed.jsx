// NewsFeed.js
import React, { useState } from 'react';
import "../styles/NewsFeed.scss";
import Feed from "./Feed";
import Profile from '../assets/wanda.jpg';
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NewsFeed() {
    
    // <FontAwesomeIcon icon={faTimes} className="logout-xmark" onClick={handleCancelPost}/>

    return (
        <div className="news-feed-container">
            <div className='create-post'>
                <h4 className='create-post-header'>Create Post</h4>
                <div className="profile-pic">
                    <img src={Profile} alt="Profile" />
                </div>
                <div className='upload-photo'>
                    <input type="file" id="myFile" name="filename" className='upload-button' />
                </div>
                <form className='form-container'>
                    <textarea type="text" className="input-feed" placeholder="What's on your mind?"/>
                    <button type="submit">Post</button>
                </form>
                <button type="cancel" className="cancel-button">Cancel</button>
            </div>
            <Feed />
        </div>
    );
}

export default NewsFeed;
