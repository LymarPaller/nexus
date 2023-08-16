import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AsideLeft.scss';
import Profile from '../assets/wanda.jpg';
import FriendsIcon from '../assets/icons/friends.png';
import GroupsIcon from '../assets/icons/groups.png';
import MemoriesIcon from '../assets/icons/memories.png';
import SavedIcon from '../assets/icons/saved.png';
import FeedsIcon from '../assets/icons/feeds.png';
import CurrencyIcon from '../assets/icons/currency.png';
import WeatherIcon from '../assets/icons/weather.png';
import SeemoreIcon from '../assets/icons/seemore.png';
import SeelessIcon from '../assets/icons/seeless.png';

function AsideLeft() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    const sections = [
        { title: 'Friends', icon: FriendsIcon},
        { title: 'Groups', icon: GroupsIcon },
        { title: 'Memories', icon: MemoriesIcon },
        { title: 'Saved', icon: SavedIcon },
        { title: 'Feeds', icon: FeedsIcon },
    ];

    const seeMoreText = expanded ? 'See Less' : 'See More';

    const openWeatherLink = () => {
        window.open('https://kairos-weatherapp.vercel.app/', '_blank');
    };

    const openCurrencyLink = () => {
        window.open('https://exploredia.vercel.app/convert.html', '_blank');
    };

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
                    <div className={`section ${section.title.toLowerCase()}-section`} key={index}>
                        <div className="profile-image">
                            <img src={section.icon} alt={`${section.title} Profile`} />
                        </div>
                        <h3>{section.title}</h3>
                        {/* Render section content */}
                    </div>
                ))}

                {/* Toggle button */}
                <div className="section see-more-section" onClick={toggleExpansion}>
                    <div className="profile-image">
                        <img src={expanded ? SeelessIcon : SeemoreIcon} alt={seeMoreText} />
                    </div>
                    <h3>{seeMoreText}</h3>
                </div>

                {/* Render Weather and Currency sections based on expansion */}
                {expanded && (
                    <>
                        <div className="section weather-section" onClick={openWeatherLink}>
                            <div className="profile-image">
                                <img src={WeatherIcon} alt="Weather" />
                            </div>
                            <h3>Weather</h3>
                        </div>
                        <div className="section currency-section" onClick={openCurrencyLink}>
                            <div className="profile-image">
                                <img src={CurrencyIcon} alt="Currency" />
                            </div>
                            <h3>Currency</h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default AsideLeft;
