import React, { useState } from 'react';
import Profile from '../assets/wanda.jpg';

function SuggestedFriendContainer(props) {
  const { profilePhoto } = props;
  const [suggestedFriends, setSuggestedFriends] = useState([
    { name: 'Faith Mariano' },
    { name: 'Saylor Twift' }
  ]);

  return (
    <>
      {suggestedFriends.map((friend, index) => (
        <div className="friend-suggestion" key={index}>
          <div className="aside-right-image">
            <img src={profilePhoto} alt="Profile" />
          </div>
          <div className="suggest-name-container">
            <span>{friend.name}</span>
            <div className="button-add-remove">
              <button className="add-btn">Add</button>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default SuggestedFriendContainer;
