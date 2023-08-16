
import Profile from '../assets/wanda.jpg';
import React, { useState } from 'react';

function SuggestedFriendContainer () {

    const [suggestedFriends, setSuggestedFriends] = useState([
        { name: 'Faith Mariano' },
        { name: 'Saylor Twift' }
        // Add more suggested friends here
    ]);

    return(
        <>
        {suggestedFriends.map((friend, index) => (
            <div className="friend-suggestion" key={index}>
                <div className="aside-right-image">
                    <img src={Profile} alt="Profile" />
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

export default SuggestedFriendContainer