import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import ProfileDetail from "../components/ProfileDetail";
import Feed from "../components/Feed";
import "../styles/ProfilePage.scss";
import "../styles/ProfileFeed.scss";

function ProfilePage () {
    return (
        <>
        <div className="profile-page-main-container">
            <AsideLeft />
            <div className="profile-feed-container">
                <ProfileDetail />
                <Feed />
            </div>
            <AsideRight />
        </div>
        </>
    );
};

export default ProfilePage;