import '../styles/AsideRight.scss';
import FriendsContainer from './FriendsContainer';
import SuggestedFriendContainer from './SuggestedFriendContainer';
import ProfileDefault from '../assets/icons/profile.svg'

function AsideRight() {
    const sampleNames = [
        {
            id: 1,
            name: 'Lymar Paller',
            photo: ProfileDefault,
        },
        {
            id: 2,
            name: 'Riya Villamor',
            photo: ProfileDefault,
        },
    ]

    return (
        <div className="aside-right-container">
            <div className="suggestion-container">
                <h5>Suggested Friends</h5>
                <SuggestedFriendContainer profilePhoto={ProfileDefault}/>
            </div>

            <div className="online-container">
                <h5>Friends</h5>
                {
                    sampleNames.map(samplename=>
                        <FriendsContainer
                        key={samplename.id}
                        followerName={samplename.name}
                        profilePhoto={samplename.photo}
                        />

                    )
                }
            </div>
        </div>
    );
}

export default AsideRight;
