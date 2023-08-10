import React, { useState } from 'react';
import "../styles/ProfileDetail.scss";
import LocationPin from '../assets/icons/location.svg';
import WebIcon from '../assets/icons/web.svg';
import PlaceholderCover from '../assets/landing-page-photo.jpg';
import Profile from '../assets/wanda.jpg';

function ProfileDetail() {
    const [websiteClicked, setWebsiteClicked] = useState(false);

    const handleWebsiteClick = () => {
        setWebsiteClicked(true);
        window.open("https://www.instagram.com/wandaringmaltese/", '_blank');
    };

    return (
        <div className="profile-main-container">
            <div className="cover-photo">
                <img src={PlaceholderCover} alt="Cover" />
            </div>
            <div className="profile-photo">
                <img src={Profile} alt="Profile" />
            </div>
            <div className="detail-container">
                <h1 className="user-profile-name">Wanda Zurbano</h1>
                <div className="detail-container-intro">
                    <p>Wagging Wandarer</p>
                    <p>Works at Pawsitive Ventures</p>
                </div>
                <div className="detail-container-other-details">
                    <span onClick={handleWebsiteClick}><img src={WebIcon} alt="Website" /></span>
                    <p className="profile-website detail-container-other-details-paragraph">Website</p>
                    <span><img src={LocationPin} alt="Location" /></span>
                    <p className="profile-location detail-container-other-details-paragraph">Barkingham Palace</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetail;
