// FeedsPage.js
import React, { useEffect } from "react";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import Feed from "../components/Feed";
import Logo from '../assets/nexus-logo-blue.svg';


function FeedsPage() {
  useEffect(() => {
    document.title = 'Feeds';
  }, []);


  const profileArray = [
    {
      id: 1,
      img: Logo,
      name: 'Nexus Team',
      postDescription: "Techblazers coding for tomorrow's MP3 presentation be like  #ZombiesMode 🧟‍♂️💻",
      imgPost: "https://easyuni.com/media/articles/2015/10/29/Technology-Zombie-Infographic-Image-Header.jpg",
      date: 'about a minute ago'
    },
    {
      id: 2,
      img: "https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg",
      name: 'Riya Villamor',
      postDescription: 'Unlocking my enigma 🔐✨',
      imgPost: "https://i.ytimg.com/vi/UxA5OnjRbAw/maxresdefault.jpg",
      date: '1 hour ago'
    },
    {
      id: 3,
      img: "https://e1.pxfuel.com/desktop-wallpaper/223/557/desktop-wallpaper-kathnielmalaysia-daniel-padilla.jpg",
      name: 'Lymar Paller',
      postDescription: 'Java in My Cup, JavaScript on My Screen! ☕🖥️',
      imgPost: "https://www.gabadigital.com/images/coding.jpg",
      date: '10 hours ago'
    },

  ];

  return (
    <div className="save-page-container">
      <div className="news-feed-container">
        <h1>Feeds</h1>
        {profileArray.map(profileArr => (
          <Feed
            key={profileArr.id}
            img={profileArr.img}
            author={profileArr.name}
            imgPost={profileArr.imgPost}
            postDescription={profileArr.postDescription}
            dateCreated={profileArr.date}
          />
        ))}
      </div>
      <AsideLeft />
      <AsideRight />
    </div>
  );
}

export default FeedsPage;
