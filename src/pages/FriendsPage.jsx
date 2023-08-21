import React, { useEffect, useState } from "react";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import FriendsContainer from "../components/FriendsContainer"
import "../styles/FriendsPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../store/currentUserReducer";
import axios from "axios";
import { setFollowers } from "../store/followerReducer";

function FriendsPage() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)
  const followers = useSelector(state => state.followers)
  // const [followers, setfollowers] = useState([])

  const fetchFollower = async () => {
    try {
        const res = await axios(`http://localhost:8000/api/v1/follower?followUserId=${currentUser}`)
        dispatch(setFollowers(res.data.data))
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
  }
  
 
  useEffect(() => {
    document.title = 'Friends';
    // setCurrentUser(user);
    fetchFollower();
  }, [currentUser]);
  
  useEffect(() => {
  }, []);
  
  return (
    <div className="friends-main-container">
      <AsideLeft />
      <div className="friends-page-container">
        <div className="friend-container">
          <h1>Friends</h1>
          <div className="friend-container">
            {followers.map(follower => (
              <FriendsContainer 
                key={follower.id} 
                followerUserId={follower.followerUserId}
                followerName={follower.followerUser.name}
                profilePhoto={follower.followerUser.profilePhoto}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendsPage;
