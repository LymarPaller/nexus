import "../styles/Feed.scss";
import Profile from '../assets/wanda.jpg';
import Comment from '../assets/icons/commenticon.svg';
import Like from '../assets/icons/likeicon.svg';


function Feed () {
    return (
        <>
        <div className="feed-container">
            <div className="profile-feed-details">
            <div className="profile-info">
            <div className="profile-image">
              <img src={Profile} alt="Profile" />
            </div>
            <div className="name-time">
              <h3>Wanda Zurbano</h3>
              <p>1 minute ago</p>
            </div>
          </div>
          <div className="delete-icon">
            {/* Add delete icon modal upper right side */}
          </div>
          <div className="captions">
            <p>Pupparazzi caught me posing 📸</p>
          </div>
          <div className="post-image">
          <img src={Profile} alt="Profile" />
          </div>

          <div className="likes-comments">
            <div className="likes">
              <span className="like-icon"><img src={Like}/></span>
              <p>100 Likes</p>
            </div>
            <div className="comments">
              <span className="comment-icon"><img src={Comment}/></span>
              <p>50 Comments</p>
            </div>
          </div>

            </div>

        </div>
        </>
    )
}

export default Feed