import React, { useContext, useEffect, useState } from 'react';
import Profile from '../assets/wanda.jpg';
import '../styles/NewsFeed.scss';
import Feed from './Feed';
import { useModal } from '../app/useModal';
import CreatePostModal from '../components/CreatePost';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import { useSelector } from 'react-redux';

function NewsFeed() {
    const { isOpen, openModal, closeModal } = useModal();
    const [postText, setPostText] = useState('');
    const [feeds, setFeeds] = useState([])
    const [loading, setLoading] = useState(true);
    const currentUser = useSelector((state) => state.currentUser);

    const fetchFeed = async () => {
        try {
            const res = await axios('http://localhost:8000/api/v1/post')
            const postData = res.data.data
            setFeeds(postData);

        } catch (error) {
            console.error('Error fetching feed:', error);
        } finally {
            setLoading(false); 
        }
    }

    useEffect(() => {
        fetchFeed();
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <div className="news-feed-container">
                <div className='create-post'>
                    <h4 className='create-post-header'>Create Post</h4>
                    <div className="profile-pic">
                        <img src={currentUser.profilePhoto} alt="Profile" />
                    </div>
                    <div className='post-text-area-container'>
                        <textarea
                            onClick={openModal}
                            className="input-feed"
                            placeholder="What's on your mind?"
                            // value={postText}
                            // onChange={(e) => setPostText(e.target.value)}
                        />
                    </div>
                    <button onClick={openModal} className="cancel-button">Cancel</button>
                </div>
                {
                    feeds.toReversed().map(
                        feed=><Feed
                        key={feed.id} 
                        postId={feed.id} 
                        imgPost={feed.imgPost} 
                        postDescription={feed.postDescription} 
                        dateCreated={feed.dateCreated} 
                        author={feed.user.name} 
                        img={feed.user.profilePhoto}
                        currentId={currentUser.id}/>
                    )
                }
            </div>
            {/* Using the extracted CreatePostModal component */}
            <CreatePostModal
                isOpen={isOpen}
                closeModal={closeModal}
                fetchFeed={fetchFeed}
                // postText={postText}
                // setPostText={setPostText}
                // handlePost={handlePost}
            />
        </>
    );
}

export default NewsFeed;
