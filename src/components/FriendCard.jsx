import { Link } from "react-router-dom";
import "../styles/SearchFriends.scss";
import FriendsContainer from './FriendsContainer';
import SuggestedFriendContainer from './SuggestedFriendContainer';
import Profile from "../assets/wanda.jpg"

function FriendCard(props) {
const {friendId, name, introduction, city, profilePhoto} = props

    return (
    <>
        <Link>
          <div className="card">
            <div className="picture-container">
              <img src={profilePhoto} alt="" />
            </div>
            <div className="details-container">
              <div>
                <h1>{name}</h1>
              </div>
              <div>
                <p>{introduction}</p>
                <p>{city}</p>
              </div>
              <div>
                <button>Add</button>
              </div>
            </div>

          </div>
        </Link>
    </>
    );
}

export default FriendCard;