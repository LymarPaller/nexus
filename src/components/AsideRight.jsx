import Profile from '../assets/wanda.jpg';
import "../styles/AsideRight.scss";

function AsideRight() {
    return (
        <>
            <div className="aside-right-container">
                <div className="suggestion-container">
                    <h5>Suggested Friends</h5>
                    <div className="friend-suggestion">
                        <div className="aside-right-image">
                            <img src={Profile} alt="Profile" />
                        </div>
                        <div className='suggest-name-container'>
                            <span>Faith Mariano</span>
                            <div className='button-add-remove'>
                                <button className="add-btn">Add</button>
                                <button className="remove-btn">Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className="friend-suggestion">
                        <div className="aside-right-image">
                            <img src={Profile} alt="Profile" />
                        </div>
                        <div className='suggest-name-container'>
                            <span>Saylor Twift</span>
                            <div className='button-add-remove'>
                                <button className="add-btn">Add</button>
                                <button className="remove-btn">Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* add friend suggestions here sa freetime */}
                </div>


                <div className="online-container">
                    <h5>Contact</h5>
                    <div className="online-friends">
                        <div className="aside-right-image">
                            <img src={Profile} alt="Profile" />
                        </div>
                        <span>Klane Zurbano</span>
                    </div>
                    <div className="online-friends">
                        <div className="aside-right-image">
                            <img src={Profile} alt="Profile" />
                        </div>
                        <span>Ryan Azur</span>
                    </div>
                    <div className="online-friends">
                        <div className="aside-right-image">
                            <img src={Profile} alt="Profile" />
                        </div>
                        <span>Kodego PH</span>
                    </div>
                    <div className="online-friends">
                        <div className="aside-right-image">
                            <img src={Profile} alt="Profile" />
                        </div>
                        <span>Lymar Paller</span>
                    </div>
                    <div className="online-friends">
                        <div className="aside-right-image">
                            <img src={Profile} alt="Profile" />
                        </div>
                        <span>Riya Villamor</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AsideRight