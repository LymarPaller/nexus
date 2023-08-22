import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import "../styles/SearchFriends.scss";
import FriendsContainer from './FriendsContainer';
import SuggestedFriendContainer from './SuggestedFriendContainer';
import Profile from "../assets/wanda.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faUserPlus } from '@fortawesome/free-solid-svg-icons';

function FriendCard(props) {
  const { friendId, name, introduction, city, profilePhoto } = props;

 
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

 
  const handleFollowClick = () => {
    
    setIsLoading(true);


    setTimeout(() => {
      setIsFollowing(true);
      setIsLoading(false);
    }, 1000); 
  };

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

              {isLoading ? (
                <button disabled>
                  <FontAwesomeIcon icon={faSpinner} spin /> Loading
                </button>
              ) : isFollowing ? (
                <button disabled>Following</button>
              ) : (
                <button onClick={handleFollowClick}>
                  <FontAwesomeIcon icon={faUserPlus} /> Follow
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default FriendCard;
