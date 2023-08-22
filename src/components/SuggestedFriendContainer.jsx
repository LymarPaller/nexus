import React, { useState } from 'react';

function SuggestedFriend({ profilePhoto }) {
  const [suggestedFriends, setSuggestedFriends] = useState([
    { name: 'Faith Mariano' },
    { name: 'Saylor Twift' }
  ]);

  return (
    <div className="suggested-friend-container">
      {suggestedFriends.map((friend, index) => (
        <div className="friend-suggestion" key={index}>
          <div className="friend-suggestion-image">
            <img src={profilePhoto} alt="Profile" />
          </div>
          <div className="friend-suggestion-info">
            <span>{friend.name}</span>
            <div className="friend-suggestion-buttons">
              <button className="add-button">Add</button>
              <button className="remove-button">Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SuggestedFriend;
