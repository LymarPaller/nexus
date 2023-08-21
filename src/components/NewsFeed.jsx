import React, { useContext, useEffect, useState } from 'react';
import Profile from '../assets/wanda.jpg';
import '../styles/NewsFeed.scss';
import Feed from './Feed';
import { useModal } from '../app/useModal';
import CreatePostModal from '../components/CreatePost';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { setFeeds } from '../store/feedsReducer';
import { setCurrentUser } from '../store/currentUserReducer';

function NewsFeed() {
    const dispatch = useDispatch();
    const { isOpen, openModal, closeModal } = useModal();
    // const [feeds, setFeeds] = useState([])
    const [loading, setLoading] = useState(true);
    const currentUser = useSelector((state) => state.currentUser);
    const feeds = useSelector((state) => state.feeds);
  
    const user = {
      id: 66,
      username: 'wandaring',
      name: 'Wanda Zurbano',
      profilePhoto: 'https://images.pexels.com/photos/18025212/pexels-photo-18025212/free-photo-of-wanda-the-wonderdog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
    

    const fetchFeed = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/v1/post')
            dispatch(setFeeds(res.data.data));

        } catch (error) {
            console.error('Error fetching feed:', error);
        } finally {
            setLoading(false); 
        }
    }

    useEffect(() => {
        dispatch(setCurrentUser(user))
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
                        img={feed.user.profilePhoto}/>
                    )
                }
            </div>
            {/* Using the extracted CreatePostModal component */}
            <CreatePostModal
                isOpen={isOpen}
                closeModal={closeModal}
                fetchFeed={fetchFeed}
            />
        </>
    );
}

export default NewsFeed;
