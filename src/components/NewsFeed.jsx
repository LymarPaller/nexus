import "../styles/NewsFeed.scss";
import Feed from "./Feed";

function NewsFeed () {
    return (
        <>
        <div className="news-feed-container">
            <div className="create-post">
                <div className="profile-pic"> 
                </div>
                <input type="text" className="input-feed"/>
            </div>
            <Feed/>
        </div>
        
        </>
    )
}

export default NewsFeed