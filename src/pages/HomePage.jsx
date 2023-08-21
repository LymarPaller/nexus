import React, { useEffect, useState } from "react";
import AsideLeft from "../components/AsideLeft";
import NewsFeed from "../components/NewsFeed";
import AsideRight from "../components/AsideRight";
import "../styles/HomePage.scss";
import '../styles/main.scss';
import '../styles/normalize.scss';
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

function HomePage() {

  const currentUser = 
    {
      id: 66,
      username: 'wandaring',
      name: 'Wanda Zurbano',
      profilePhoto: 'https://images.pexels.com/photos/18025212/pexels-photo-18025212/free-photo-of-wanda-the-wonderdog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }

  
  
  useEffect(() => {
    document.title = 'Home';

  }, []);

  return (
    <div className="home-page-main-container">
      <NewsFeed currentId={currentUser.id} currentUsername={currentUser.username} currentName={currentUser.name} currentProfilePhoto={currentUser.profilePhoto}/>
      <AsideLeft currentId={currentUser.id} currentUsername={currentUser.username} currentName={currentUser.name} currentProfilePhoto={currentUser.profilePhoto}/>
      <AsideRight />
    </div>
  );
}

export default HomePage;
