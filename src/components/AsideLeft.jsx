import "../styles/AsideLeft.scss"
import Profile from '../assets/wanda.jpg'

function AsideLeft() {
    return (
        <>
            <div className="aside-left-container">
                <div className="profile-info">
                    <div className="profile">
                        <div className="profile-image">
                            <img src={Profile} alt="Profile" />
                        </div>
                        <h3>Wanda Zurbano</h3>
                    </div>
                    <div className="friends-section">
                        <div className="profile-image">
                            <img src={Profile} alt="Friend Profile" />
                        </div>
                        <h3>Friends</h3>
                        {/* Render list of friends */}
                    </div>
                    <div className="groups-section">
                        <div className="profile-image">
                            <img src={Profile} alt="Group Profile" />
                        </div>
                        <h3>Groups</h3>
                        {/* Render list of groups */}
                    </div>
                    <div className="memories-section">
                        <div className="profile-image">
                            <img src={Profile} alt="Memory Profile" />
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

