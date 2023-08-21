import React, { useEffect, useState } from "react";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import ProfileDetail from "../components/ProfileDetail";
import Feed from "../components/Feed";
import "../styles/ProfilePage.scss";
import "../styles/ProfileFeed.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../store/currentUserReducer";

function ProfilePage() {
  const currentUser = useSelector((state) => state.currentUser);
  const [profileFeed, setProfileFeed] = useState([])
  const currentUserId = currentUser.id;

  const fetchProfileFeed = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/post?userId=${currentUserId}`)
      setProfileFeed(res.data.data)
    } catch (error) {
        console.error('Error fetching feed:', error);
    }
}

  useEffect(() => {
    document.title = "Profile";
    fetchProfileFeed()
  }, []);

  return (
    <div className='profile-page-main-container'>
      <div className='profile-feed-container'>
        <ProfileDetail />
        {
          Object.values(profileFeed).map(feed=>
          <Feed 
            key={feed.id}
            imgPost={feed.imgPost}
            postDescription={feed.postDescription}
            dateCreated={feed.dateCreated}
            id={feed.id}
            img={currentUser.profilePhoto}
            author={currentUser.name}
          />)
        }
        {/* <Feed/> */}
      </div>
      <AsideLeft />
      <AsideRight />
    </div>
  );
}

export default ProfilePage;
