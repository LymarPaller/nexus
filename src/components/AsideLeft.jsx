import "../styles/AsideLeft.scss"
import Profile from '../assets/wanda.jpg'
import Friends from '../assets/icons/friends.png';
import Groups from '../assets/icons/groups.png';
import Memories from '../assets/icons/memories.png';
import { Link } from 'react-router-dom';

function AsideLeft() {
    return (
        <>
            <div className="aside-left-container">
                <div className="profile-info">
                    <div className="profile">
                        <div className="profile-image">
                            <Link to="/">
                                <img src={Profile} alt="Profile" />
                            </Link>
                        </div>
                        
                        <Link to="/">
                        <h3>Wanda Zurbano</h3>
                        </Link>
                    </div>
                    <div className="friends-section">
                        <div className="profile-image">
                            <img src={Friends} alt="Friend Profile" />
                        </div>
                        <h3>Friends</h3>
                        {/* Render list of friends */}
                    </div>
                    <div className="groups-section">
                        <div className="profile-image">
                            <img src={Groups} alt="Group Profile" />
                        </div>
                        <h3>Groups</h3>
                        {/* Render list of groups */}
                    </div>
                    <div className="memories-section">
                        <div className="profile-image">
                            <img src={Memories} alt="Memory Profile" />
                        </div>
                        <h3>Memories</h3>
                        {/* Render list of memories */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AsideLeft

