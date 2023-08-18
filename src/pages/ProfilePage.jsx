import React, { useEffect, useState } from "react";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import ProfileDetail from "../components/ProfileDetail";
import Feed from "../components/Feed";
import "../styles/ProfilePage.scss";
import "../styles/ProfileFeed.scss";
import axios from "axios";

function ProfilePage() {
    const [profileDatas, setProfileDatas] = useState([])
    const [profilePosts, setProfilePosts] = useState([])
    const profileUserId = 'wandaring';

    const fetchProfile = async () => {
        const res = await axios (`http://localhost:8000/api/v1/users/${profileUserId}`)
        const profileResult = res.data.data
        const postResult = res.data.data.posts
        setProfileDatas(profileResult)
        setProfilePosts(postResult)
    }


    useEffect(() => {
        document.title = 'Profile';
        fetchProfile();
    }, []);

    return (
        <div className="profile-page-main-container">
            <div className="profile-feed-container">
                <ProfileDetail
                name={profileDatas.name}
                introduction={profileDatas.introduction}
                company={profileDatas.company}
                website={profileDatas.website}
                city={profileDatas.city}
                profilePhoto={profileDatas.profilePhoto}
                coverPhoto={profileDatas.coverPhoto}
                />
                {
                    profilePosts.map(
                        profilePost => <Feed key={profilePost.id}
                        imgPost={profilePost.img_post}
                        postDescription={profilePost.post_description}
                        author={profileDatas.name} 
                        img={profileDatas.profilePhoto}/>
                    )
                }
            </div>
            <AsideLeft />
            <AsideRight />
        </div>
    );
}

export default ProfilePage;
