import React, { useEffect } from "react";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import ProfileDetail from "../components/ProfileDetail";
import Feed from "../components/Feed";
import "../styles/ProfilePage.scss";
import "../styles/ProfileFeed.scss";
import axios from "axios";

function ProfilePage() {
  
  useEffect(() => {
    document.title = 'Memories'; 
  }, []);

  return (
    <div className="profile-page-main-container">
      <div className="profile-feed-container">
        <ProfileDetail />
        <Feed />
      </div>
      <AsideLeft />
      <AsideRight />
    </div>
  );
}

export default ProfilePage;
