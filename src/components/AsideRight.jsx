import '../styles/AsideRight.scss';
import FriendsContainer from './FriendsContainer';
import SuggestedFriendContainer from './SuggestedFriendContainer';

function AsideRight() {

    return (
        <div className="aside-right-container">
            <div className="suggestion-container">
                <h5>Suggested Friends</h5>
                <SuggestedFriendContainer/>
            </div>

            <div className="online-container">
                <h5>Friends</h5>
                <FriendsContainer/>
            </div>
        </div>
    );
}

export default AsideRight;
