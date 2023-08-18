import React, { useEffect, useState } from 'react';
import Profile from '../assets/wanda.jpg';
import '../styles/NewsFeed.scss';
import Feed from './Feed';
import { useModal } from '../app/useModal';
import CreatePostModal from '../components/CreatePost';
import axios from 'axios';

function NewsFeed() {
    const { isOpen, openModal, closeModal } = useModal();
    const [postText, setPostText] = useState('');
    const [feeds, setFeeds] = useState([])
    const [comments, setComments] = useState([])


    const handlePost = (event) => {
        event.preventDefault();
        console.log('Posted:', postText);
         
        setPostText('');
        closeModal();
    };

    const fetchFeed = async () => {
        const res = await axios('http://localhost:8000/api/v1/post')
        setFeeds(res.data.data)
        setComments(res.data.data.comment_description)
        // const photo = (res.data.data.user.profile_photo)
    }

    useEffect(()=> {
        fetchFeed()
    }, [])

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
                {
                    feeds.map(
                        feed=><Feed key={feed.id} imgPost={feed.imgPost} postDescription={feed.postDescription} dateCreated={feed.dateCreated} author={feed.user.name} img={feed.user.profile_photo}/>
                    )
                }
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
