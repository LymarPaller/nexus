import React, { useEffect } from "react";
import AsideLeft from "../components/AsideLeft";
import FriendsContainer from "../components/FriendsContainer";
import ProfileDetail from "../components/ProfileDetail"; 
import "../styles/FriendsPage.scss";
import { useDispatch, useSelector } from "react-redux";

function FriendsPage() {
  const followers = useSelector((state) => state.followers);
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    document.title = 'Friends';
  }, []);

  return (
    <div className="friends-main-container">
      <AsideLeft />
      <div className="friends-page-container">
        <div className="friend-container">
          <h1>Friends</h1>
          <div className="friend-container">
            {followers.map((follower) => (
              <FriendsContainer
                key={follower.id}
                followerUserId={follower.followerUserId}
                followerName={follower.followerUser.name}
                profilePhoto={follower.followerUser.profilePhoto}
              />
            ))}
          </div>
        </div>

        {/* Render the ProfileDetail component with the friend's data
        {followers.map((follower) => (
          <ProfileDetail
            key={follower.followerUserId}
            name={follower.followerUser.name}
            profilePhoto={follower.followerUser.profilePhoto}
            coverPhoto={follower.followerUser.coverPhoto}
            city={follower.followerUser.city}
            website={follower.followerUser.websites}
            introduction={follower.followerUser.introduction}
            company={follower.followerUser.company}
          />
        ))} */}
      </div>
    </div>
  );
}

export default FriendsPage;
