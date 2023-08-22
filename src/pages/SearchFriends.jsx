import React, { useEffect, useState } from "react";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import ProfileDetail from "../components/ProfileDetail";
import Feed from "../components/Feed";
import "../styles/SearchFriends.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../store/currentUserReducer";
import { Link } from "react-router-dom";
import Profile from "../assets/wanda.jpg"
import FriendCard from "../components/FriendCard";

function SearchFriends () {
  const search = useSelector((state) => state.search);
  const searchNew = search.data;

  return (
    <>
    <div className='search-main-container'>
      <div className='result-container'>
        <h1>Search Result</h1>
        {
          Object.values(searchNew).map(srch=>
          <FriendCard
            key={srch.id}
            friendId={srch.id}
            name={srch.name}
            introduction={srch.introduction}
            city={srch.city}
            profilePhoto={srch.profilePhoto}
            coverPhoto={srch.coverPhoto}
            company={srch.company}
            websites={srch.websites}
            feedArray={srch.posts}
          />)
        }
      </div>
    </div>
    <AsideLeft />
    </>
  );
}

export default SearchFriends;