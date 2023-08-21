import React, { useEffect } from "react";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import FriendsContainer from "../components/FriendsContainer"
import "../styles/FriendsPage.scss";

function FriendsPage() {
  
 
  useEffect(() => {
    document.title = 'Friends';  
  }, []);

  return (
    <div className="friends-main-container">
      <AsideLeft />
      <div className="friends-page-container">
        <div className="friend-container">
          <h1>Friends</h1>
          <FriendsContainer />
        </div>
      </div>
    </div>
  );
}

export default FriendsPage;
