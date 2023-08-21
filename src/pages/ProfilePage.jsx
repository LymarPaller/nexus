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
  const [profileDatas, setProfileDatas] = useState({});
  const [profilePosts, setProfilePosts] = useState([]);
  const [reload, setReload] = useState(false);
  const profileUserId = "wandaring";

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/users/${localStorage.getItem("username")}`
      );
      const profileResult = res.data.data;
      const postResult = res.data.data.posts;
      setProfileDatas(profileResult);
      setProfilePosts(postResult);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Profile";
    fetchProfile();
    console.log("test reload");
  }, [reload]);

  return (
    <div className='profile-page-main-container'>
      <div className='profile-feed-container'>
        <ProfileDetail
          name={profileDatas.name}
          introduction={profileDatas.introduction}
          company={profileDatas.company}
          website={profileDatas.websites}
          city={profileDatas.city}
          profilePhoto={profileDatas.profilePhoto}
          coverPhoto={profileDatas.coverPhoto}
          setReload={setReload}
        />
        {profilePosts.toReversed().map((profilePost) => (
          <Feed
            key={profilePost.id}
            imgPost={profilePost.img_post}
            postDescription={profilePost.post_description}
            dateCreated={profilePost.date_created}
            author={profileDatas.name}
            img={profileDatas.profilePhoto}
            postId={profilePost.id}
          />
        ))}
      </div>
      <AsideLeft />
      <AsideRight />
    </div>
  );
}

export default ProfilePage;
