import React, { useEffect } from "react";
import AsideLeft from "../components/AsideLeft";
import NewsFeed from "../components/NewsFeed";
import AsideRight from "../components/AsideRight";
import "../styles/HomePage.scss";
import '../styles/main.scss';
import '../styles/normalize.scss';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../store/currentUserReducer";

function HomePage() {

  useEffect(() => {
    document.title = 'Home';
  }, []);

  

  return (
    <div className="home-page-main-container">
      <NewsFeed/>
      <AsideLeft/>
      <AsideRight />
    </div>
  );
}

export default HomePage;
