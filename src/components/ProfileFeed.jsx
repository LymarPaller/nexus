import React, { useState } from 'react';
import '../styles/Feed.scss';
import Profile from '../assets/wanda.jpg';

function ProfileFeed() {
  const [likes, setLikes] = useState(100);
  const [comments, setComments] = useState(50);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = () => {
    setComments(comments + 1);
  };

  return (
    <div className="feed-container">
      <div className="profile-feed-details">
        <div className="profile-info">
          <div className="profile-image">
            <img src={Profile} alt="Profile" />
          </div>
          <div className="name-time">
            <h3>Wanda Zurbano</h3>
            <p>1 minute ago</p>
          </div>
        </div>
        <div className="delete-icon">
          {/* Add delete icon modal upper right side */}
        </div>
        <div className="captions">
          <p>Sample captions here</p>
        </div>
        <div className="post-image">
          <img src={Profile} alt="Profile" />
        </div>
        <div className="likes-comments">
          <div className="likes">
            <p className="like-button" onClick={handleLike}>
              {likes} Likes
            </p>
          </div>
          <div className="comments">
            <p>{comments} Comments</p>
            <button onClick={handleAddComment}>Add Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileFeed;
