import FriendsContainer from "../components/FriendsContainer"
import "../styles/FriendsPage.scss";


function FriendsPage () {
    return(
        <>
        <div className="friends-page-container">
            <h1>Friends</h1>
            <div className="friend-container">
                <FriendsContainer />
            </div>
        </div>
        </>
    )
}

export default FriendsPage