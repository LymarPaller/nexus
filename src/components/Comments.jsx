import '../styles/Comments.scss'
import Profile from '../assets/wanda.jpg';

function Comments () {
    return (
        <>
        <div className='list-comments'>
            <div className='profile'>

                <div className="profile-image">
                    <img src={Profile} alt="Profile" />
                    <div className="comment">
                        <h5>
                            BG color - Red
                        </h5>
                        <div>
                            <p>i want one</p>
                        </div>
                    </div>
                </div>

                <div className="profile-image">
                    <img src={Profile} alt="Profile" />
                    <div className="comment">
                        <h5>
                            Riya Kahoot Queen
                        </h5>
                        <div>
                            <p>So cute!asdfasdfasdfsadffadfas
                                asdfasdfasdfsadffadfasasdfasdf
                                sadfasdfasdfasdfasdf
                                asdfasdfasdfsadffadfasasdfasdfasdfasdf
                                asdfasdfasdfsadffadfasasdfasdfasdfasdf
                                asdfasdfasdfasdfsadf
                                asdfasdfasdfsadffadfasaasdfsdf
                            </p>
                        </div>
                    </div>
                </div>
                <div className="profile-image">
                    <img src={Profile} alt="Profile" />
                    <div className="comment">
                        <h5>
                            Riya Kahoot Queen
                        </h5>
                        <div>
                            <p>So cute!asdfasdfasdfsadffadfas
                                asdfasdfasdfsadffadfasasdfasdf
                                sadfasdfasdfasdfasdf
                                asdfasdfasdfsadffadfasasdfasdfasdfasdf
                                asdfasdfasdfsadffadfasasdfasdfasdfasdf
                                asdfasdfasdfasdfsadf
                                asdfasdfasdfsadffadfasaasdfsdf
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Comments