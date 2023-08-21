import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AsideLeft.scss';
import Profile from '../assets/wanda.jpg';
import FriendsIcon from '../assets/icons/friends.png';
import GamesIcon from '../assets/icons/games.png';
import MemoriesIcon from '../assets/icons/memories.png';
import SavedIcon from '../assets/icons/saved.png';
import FeedsIcon from '../assets/icons/feeds.png';
import CurrencyIcon from '../assets/icons/currency.png';
import WeatherIcon from '../assets/icons/weather.png';
import SeemoreIcon from '../assets/icons/seemore.png';
import SeelessIcon from '../assets/icons/seeless.png';

function SectionLink({ to, imgSrc, imgAlt, title }) {
    return (
        <div className="section">
            <Link to={to}>
                <div className="profile-image">
                    <img src={imgSrc} alt={imgAlt} />
                </div>
            </Link>
            <Link to={to}>
                <h3>{title}</h3>
            </Link>
        </div>
    );
}

function AsideLeft({currentName, currentProfilePhoto}) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    const seeMoreText = expanded ? 'See Less' : 'See More';

    function openWeatherLink() {
        window.open('https://kairos-weatherapp.vercel.app/', '_blank');
    }

    function openCurrencyLink() {
        window.open('https://exploredia.vercel.app/convert.html', '_blank');
    }

    const sections = [
        { to: '/friends', imgSrc: FriendsIcon, imgAlt: 'Friends Profile', title: 'Friends' },
        { to: '/games', imgSrc:GamesIcon, imgAlt: 'Games Profile', title: 'Games' },
        { to: '/memories', imgSrc: MemoriesIcon, imgAlt: 'Memories Profile', title: 'Memories' },
        { to: '/save', imgSrc: SavedIcon, imgAlt: 'Saved Profile', title: 'Saved' },
        { to: '/feeds', imgSrc: FeedsIcon, imgAlt: 'Feeds Profile', title: 'Feeds' }
    ];

    return (
        <div className="aside-left-container">
            <div className="profile-info">
                <div className="profile">
                    <Link to="/profile">
                        <div className="profile-image">
                            <img src={currentProfilePhoto} alt="Profile" />
                        </div>
                    </Link>
                    <Link to="/profile">
                        <h3>{currentName}</h3>
                    </Link>
                </div>

                {sections.map((section) => (
                    <SectionLink
                        key={section.to}
                        to={section.to}
                        imgSrc={section.imgSrc}
                        imgAlt={section.imgAlt}
                        title={section.title}
                    />
                ))}

                <div className="section see-more-section" onClick={toggleExpansion}>
                    <div className="profile-image">
                        <img src={expanded ? SeelessIcon : SeemoreIcon} alt={seeMoreText} />
                    </div>
                    <h3>{seeMoreText}</h3>
                </div>

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
