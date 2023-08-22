import React, { useEffect } from "react";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import ProfileDetail from "../components/ProfileDetail";
import Feed from "../components/Feed";
import "../styles/ProfilePage.scss";
import "../styles/ProfileFeed.scss";
import axios from "axios";
import Logo from '../assets/nexus-logo-blue.svg';

function ProfilePage() {
  const pictureSample = 'https://images.pexels.com/photos/18089062/pexels-photo-18089062/free-photo-of-wd73-for-storage-only.png?auto=compress&cs=tinysrgb&w=600&lazy=load';
  const pictureSampleNew = 'https://images.pexels.com/photos/18089256/pexels-photo-18089256/free-photo-of-lunchbreak-storage-only.png?auto=compress&cs=tinysrgb&w=600&lazy=load';
  
  const profilePicture1 = 'https://i0.wp.com/media.ghgossip.com/wp-content/uploads/2023/03/01122035/Liza-Soberano.jpg';

  const profileArray = [
    {
      id: 1,
      img: profilePicture1,
      name: 'Klane Zurbano',
      postDescription: 'Our class, our screens, our story. 💻💬📚', 
      imgPost: pictureSample,
      date: 'May 25, 2023'
    },
    {
      id: 2,
      img: Logo,
      name: 'Nexus Team',
      postDescription: 'Taking a break from coding the Nexus to refuel the mind and body 🖥️🥗', 
      imgPost: pictureSampleNew,
      date: 'August 15, 2023'
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
              img={profileArr.img}
              author={profileArr.name}
              imgPost={profileArr.imgPost}
              postDescription={profileArr.postDescription}  
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
