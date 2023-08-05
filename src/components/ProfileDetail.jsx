
import "../styles/ProfileDetail.scss";
import LocationPin from '../assets/icons/location.svg';
import WebIcon from '../assets/icons/web.svg';
import PlaceholderCover from '../assets/landing-page-photo.jpg';

function ProfileDetail () {
    return (
        <>
        <div className="profile-main-container">
            <div className="cover-photo">
                <img src={PlaceholderCover}/>
            </div>
            <div className="profile-photo"></div>
            <div className="detail-container">
                <h1 className="user-profile-name">Jane Doe</h1>
                    <div className="detail-container-intro">
                        <p>introduction</p>
                        <p>job description</p>
                    </div>
                    <div className="detail-container-other-details">
                        <span><img src={WebIcon}/></span><p className="profile-website detail-container-other-details-paragraph">Facebook</p>
                        <span><img src={LocationPin}/></span><p className="profile-location detail-container-other-details-paragraph">PH</p>
                    </div>
            </div>
        </div>
        </>
    )
}

export default ProfileDetail