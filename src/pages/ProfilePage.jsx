import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import ProfileDetail from "../components/ProfileDetail";
import ProfileFeed from "../components/ProfileFeed";
import "../styles/ProfilePage.scss";
import "../styles/ProfileFeed.scss";

function ProfilePage () {
    return (
        <>
        <div className="profile-page-main-container">
            <AsideLeft />
            <div className="profile-feed-container">
                <ProfileDetail />
                <ProfileFeed />
            </div>
            <AsideRight />
        </div>
        </>
    );
};

export default ProfilePage;