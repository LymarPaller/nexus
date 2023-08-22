import React, { useEffect } from "react";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import Feed from "../components/Feed";

function SavedPage() {
  useEffect(() => {
    document.title = 'Saved';  
  }, []);

  const profileArray = [
    {
      id: 1,
      img: "https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg",
      name: 'Riya Villamor',
      postDescription: 'PanelistGenie: "Make a wish." Me and Lymar: ... 🧞‍♂️',
      imgPost: "https://st2.depositphotos.com/2048845/11207/i/950/depositphotos_112075168-stock-photo-a-plus-100-percent-grade.jpg",
      date: 'about a minute ago'
    },
    {
      id: 2,
      img: "https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg",
      name: 'Riya Villamor',
      postDescription: "I can't find the meme I want, so now I have to use a less creative one. 😕",
      imgPost: "https://slidechef.net/wp-content/uploads/2023/03/Free-Dog-Meme.jpg",
      date: '2 hours ago'
    },
    {
      id: 3,
      img: "https://e1.pxfuel.com/desktop-wallpaper/223/557/desktop-wallpaper-kathnielmalaysia-daniel-padilla.jpg",
      name: 'Lymar Paller',
      postDescription: "Me staring at my screen for 10 hours because my code has no error but it doesn't work 🖥️",
      imgPost: "https://miro.medium.com/v2/resize:fit:800/1*1rfnzSzGA_X2vgUHzn2h3A.jpeg",
      date: '10 hours ago'
    },
  ];

  return (
    <div className="save-page-container">
      <div className="news-feed-container">
        <h1>Saved</h1>
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

export default SavedPage;
