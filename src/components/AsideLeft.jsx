import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AsideLeft.scss';
import Profile from '../assets/wanda.jpg';
import FriendsIcon from '../assets/icons/friends.png';
import GroupsIcon from '../assets/icons/groups.png';
import MemoriesIcon from '../assets/icons/memories.png';
import SavedIcon from '../assets/icons/saved.png'
import FeedsIcon from '../assets/icons/feeds.png'
import CurrencyIcon from '../assets/icons/currency.png'
import WeatherIcon from '../assets/icons/weather.png'

function AsideLeft() {
    const sections = [
        { title: 'Friends', icon: FriendsIcon },
        { title: 'Groups', icon: GroupsIcon },
        { title: 'Memories', icon: MemoriesIcon },
        { title: 'Saved', icon: SavedIcon },
        { title: 'Feeds', icon: FeedsIcon },
        { title: 'Weather', icon: WeatherIcon},
        { title: 'Currency', icon: CurrencyIcon}
        
    ];

    return (
        <div className="aside-left-container">
            <div className="profile-info">
                <div className="profile">
                    <Link to="/profile">
                        <div className="profile-image">
                            <img src={Profile} alt="Profile" />
                        </div>
                    </Link>
                    <Link to="/profile">
                        <h3>Wanda Zurbano</h3>
                    </Link>
                </div>
                {sections.map((section, index) => (
                    <div className={`${section.title.toLowerCase()}-section`} key={index}>
                        <div className="profile-image">
                            <img src={section.icon} alt={`${section.title} Profile`} />
                        </div>
                        <h3>{section.title}</h3>
                        {/* Render list of {section.title.toLowerCase()} */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AsideLeft;
