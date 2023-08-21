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
    const [profileDatas, setProfileDatas] = useState([])
    const [profilePosts, setProfilePosts] = useState([])

    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser)
  
  
    useEffect(() => {
      document.title = 'Home';
  
      const user = {
        id: 66,
        username: 'wandaring',
        name: 'Wanda Zurbano',
        profilePhoto: 'https://images.pexels.com/photos/18025212/pexels-photo-18025212/free-photo-of-wanda-the-wonderdog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }
      dispatch(setCurrentUser(user))
    }, []);

    const fetchProfile = async () => {
        const res = await axios (`http://localhost:8000/api/v1/users?username=${currentUser.username}`)
        // const profileResult = res.data.data
        // const postResult = res.data.data.posts
        // setProfileDatas(profileResult)
        // setProfilePosts(postResult)
        console.log(res.data.data)
    }


    useEffect(() => {
        document.title = 'Profile';
        fetchProfile();
    }, []);

    return (
        <div className="profile-page-main-container">
            <div className="profile-feed-container">
                <ProfileDetail
                // name={profileDatas.name}
                // introduction={profileDatas.introduction}
                // company={profileDatas.company}
                // website={profileDatas.website}
                // city={profileDatas.city}
                // profilePhoto={profileDatas.profilePhoto}
                // coverPhoto={profileDatas.coverPhoto}
                />
                {/* {
                    profilePosts.map(
                        profilePost => <Feed key={profilePost.id}
                        imgPost={profilePost.img_post}
                        postDescription={profilePost.post_description}
                        dateCreated={profilePost.date_created}
                        author={profileDatas.name} 
                        img={profileDatas.profilePhoto}
                        postId={currentUser.id}/>
                    )
                } */}
                <Feed/>
            </div>
            <AsideLeft />
            <AsideRight />
        </div>
    );
}

export default ProfilePage;
