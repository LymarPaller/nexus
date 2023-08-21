import React, { useEffect, useState } from "react";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import FriendsContainer from "../components/FriendsContainer"
import "../styles/FriendsPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../store/currentUserReducer";
import axios from "axios";

function FriendsPage() {
  const dispatch = useDispatch()
  const [currentUser, setCurrentUser] = useState([])
  const [followers, setfollowers] = useState([])

  //SET-USER-TEMPORARY
  const user = {
    id: 66,
    username: 'wandaring',
    name: 'Wanda Zurbano',
    profilePhoto: 'https://images.pexels.com/photos/18025212/pexels-photo-18025212/free-photo-of-wanda-the-wonderdog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }

  const fetchFollower = async () => {
    try {
        const res = await axios(`http://localhost:8000/api/v1/follower?followUserId=${currentUser}`)
        setfollowers(res.data.data)
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
  }
  
 
  useEffect(() => {
    document.title = 'Friends';
    setCurrentUser(user);
    fetchFollower();
  }, []);

  useEffect(() => {
    console.log(followers);
  }, [followers]); 
  
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
