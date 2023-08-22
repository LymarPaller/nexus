import React, { useEffect } from "react";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import ProfileDetail from "../components/ProfileDetail";
import Feed from "../components/Feed";
import "../styles/ProfilePage.scss";
import "../styles/ProfileFeed.scss";
import axios from "axios";

function ProfilePage() {
  const pictureSample = 'https://images.pexels.com/photos/18089062/pexels-photo-18089062/free-photo-of-wd73-for-storage-only.png?auto=compress&cs=tinysrgb&w=600&lazy=load'
  const pictureSampleNew = 'https://images.pexels.com/photos/18089256/pexels-photo-18089256/free-photo-of-lunchbreak-storage-only.png?auto=compress&cs=tinysrgb&w=600&lazy=load'
  const profileArray = [
    {
      id: 1,
      name: 'Klane Zurbano',
      post: 'Our class, our screens, our story.',
      img: pictureSample,
      date: 'May 25, 2023'
    },
    {
      id: 2,
      name: 'Klane Zurbano',
      post: 'Our class, our screens, our story.',
      img: pictureSampleNew,
      date: 'May 25, 2023'
    }
  ]
  
  useEffect(() => {
    document.title = 'Memories'; 
  }, []);

  return (
    <div className="profile-page-main-container main-memory-container">
      <div className="profile-feed-container memory-container">
        <h1>Memories</h1>
        {
          profileArray.map(profileArr=>
            <Feed 
            key={profileArr.id}
            author={profileArr.name}
            imgPost={profileArr.img}
            dateCreated={profileArr.date}
            />
          )
        }
      </div>
      <AsideLeft />
      <AsideRight />
    </div>
  );
}

export default ProfilePage;
