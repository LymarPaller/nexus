import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import '../styles/AsideLeft.scss';

import FriendsIcon from '../assets/icons/friends.png';
import GamesIcon from '../assets/icons/games.png';
import MemoriesIcon from '../assets/icons/memories.png';
import SavedIcon from '../assets/icons/saved.png';
import FeedsIcon from '../assets/icons/feeds.png';
import CurrencyIcon from '../assets/icons/currency.png';
import WeatherIcon from '../assets/icons/weather.png';
import SeemoreIcon from '../assets/icons/seemore.png';
import SeelessIcon from '../assets/icons/seeless.png';

import { setFollowers } from '../store/followerReducer';

function SectionLink({ to, imgSrc, imgAlt, title }) {
  return (
    <div className="section">
      <Link to={to}>
        <div className="profile-image">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

function AsideLeft() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const followers = useSelector((state) => state.followers);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetchFollower();
  }, []);

  const fetchFollower = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/follower?followUserId=66`);
      dispatch(setFollowers(res.data.data));
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const seeMoreText = expanded ? 'See Less' : 'See More';

  const sections = [
    { to: '/friends', imgSrc: FriendsIcon, imgAlt: 'Friends Profile', title: 'Friends' },
    { to: '/games', imgSrc: GamesIcon, imgAlt: 'Games Profile', title: 'Games' },
    { to: '/memories', imgSrc: MemoriesIcon, imgAlt: 'Memories Profile', title: 'Memories' },
    { to: '/save', imgSrc: SavedIcon, imgAlt: 'Saved Profile', title: 'Saved' },
    { to: '/feeds', imgSrc: FeedsIcon, imgAlt: 'Feeds Profile', title: 'Feeds' },
  ];

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
              <img src={currentUser.profilePhoto} alt="Profile" />
            </div>
            <h3>{currentUser.name}</h3>
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
