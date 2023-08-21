import React, { createContext, useEffect, useState } from "react";
import AsideLeft from "../components/AsideLeft";
import NewsFeed from "../components/NewsFeed";
import AsideRight from "../components/AsideRight";
import "../styles/HomePage.scss";
import '../styles/main.scss';
import '../styles/normalize.scss';
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../store/currentUserReducer";

function HomePage() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)
  // const [currentUser, setCurrentUser] = useState([])


  useEffect(() => {
    document.title = 'Home';

    const user = {
      id: 66,
      username: 'wandaring',
      name: 'Wanda Zurbano',
      profilePhoto: 'https://images.pexels.com/photos/18025212/pexels-photo-18025212/free-photo-of-wanda-the-wonderdog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
    dispatch(setCurrentUser(user))
    // setCurrentUser(user)
  }, []);
  

  return (
    <div className="home-page-main-container">
      <NewsFeed />
      <AsideLeft/>
      <AsideRight />
    </div>
  );
}

export default HomePage;
