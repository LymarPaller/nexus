import React, { useState } from 'react';
import Profile from '../assets/wanda.jpg';
import '../styles/AsideRight.scss';

function AsideRight() {
    const [suggestedFriends, setSuggestedFriends] = useState([
        { name: 'Faith Mariano' },
        { name: 'Saylor Twift' }
        // Add more suggested friends here
    ]);

    const [onlineFriends, setOnlineFriends] = useState([
        { name: 'Klane Zurbano' },
        { name: 'Ryan Azur' },
        { name: 'Kodego PH' },
        { name: 'Lymar Paller' },
        { name: 'Riya Villamor' }
    ]);

    return (
        <div className="aside-right-container">
            <div className="suggestion-container">
                <h5>Suggested Friends</h5>
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
            </div>

            <div className="online-container">
                <h5>Contact</h5>
                {onlineFriends.map((friend, index) => (
                    <div className="online-friends" key={index}>
                        <div className="aside-right-image">
                            <img src={Profile} alt="Profile" />
                        </div>
                        <span>{friend.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AsideRight;
