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

                {/* Friends section */}
                <div className="section friends-section">
                    <Link to="/friends">
                        <div className="profile-image">
                            <img src={FriendsIcon} alt="Friends Profile" />
                        </div>
                    </Link>
                    <Link to="/friends">
                        <h3>Friends</h3>
                    </Link>
                </div>

                {/* Other sections */}
                <div className="section groups-section">
                    <Link to="/friends">
                        <div className="profile-image">
                            <img src={GroupsIcon} alt="Groups Profile" />
                        </div>
                    </Link>
                    <Link to="/friends">
                        <h3>Groups</h3>
                    </Link>
                </div>
                <div className="section memories-section">
                    <Link to="/friends">
                        <div className="profile-image">
                            <img src={MemoriesIcon} alt="Memories Profile" />
                        </div>
                    </Link>
                    <Link to="/friends">
                    <h3>Memories</h3>
                    </Link>
                </div>
                <div className="section saved-section">
                    <Link to="/save">
                        <div className="profile-image">
                            <img src={SavedIcon} alt="Saved Profile" />
                        </div>
                    </Link>
                    <Link to="/save">
                        <h3>Saved</h3>
                    </Link>
                </div>
                <div className="section feeds-section">
                    <Link to="/friends">
                        <div className="profile-image">
                            <img src={FeedsIcon} alt="Feeds Profile" />
                        </div>
                    </Link>
                    <Link to="/friends">
                        <h3>Feeds</h3>
                    </Link>
                </div>

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
