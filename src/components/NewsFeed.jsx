import "../styles/NewsFeed.scss";
import Feed from "./Feed";
import Profile from '../assets/wanda.jpg';

function NewsFeed () {
    return (
        <>
        <div className="news-feed-container">
            <div className="create-post">
                <div className="profile-pic"> 
                <img src={Profile} alt="Profile" />
                </div>
                <input type="text" className="input-feed" placeholder="What's on your mind?"/>
            </div>
            <Feed/>
        </div>
        
        </>
    )
}

export default NewsFeed