import { useState } from "react";
import Profile from '../assets/wanda.jpg';

function FriendsContainer () {

    const [onlineFriends, setOnlineFriends] = useState([
        { name: 'Klane Zurbano' },
        { name: 'Ryan Azur' },
        { name: 'Kodego PH' },
        { name: 'Lymar Paller' },
        { name: 'Riya Villamor' }
    ]);

    return(
        <>
        {onlineFriends.map((friend, index) => (
            <div className="online-friends" key={index}>
                <div className="aside-right-image">
                    <img src={Profile} alt="Profile" />
                </div>
                <span>{friend.name}</span>
            </div>
        ))}
        </>
    )
}

export default FriendsContainer