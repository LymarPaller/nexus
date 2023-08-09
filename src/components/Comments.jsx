import React, { useState } from 'react';
import '../styles/Comments.scss'
import Profile from '../assets/wanda.jpg';

function Comments() {
    const [comments, setComments] = useState([
        {
            id: 1,
            name: 'BG color - Red',
            text: 'i want one',
        },
        {
            id: 2,
            name: 'Riya Kahoot Queen',
            text:
                'So cute!asdfasdfasdfsadffadfas asdfasdfasdfsadffadfasasdfasdf sadfasdfasdfasdfasdf asdfasdfasdfsadffadfasasdfasdfasdfasdf asdfasdfasdfsadffadfasasdfasdfasdfasdf asdfasdfasdfasdfsadf asdfasdfasdfsadffadfasaasdfsdf',
        },
        {
            id: 3,
            name: 'Riya Kahoot Queen',
            text:
                'So cute!asdfasdfasdfsadffadfas asdfasdfasdfsadffadfasasdfasdf sadfasdfasdfasdfasdf asdfasdfasdfsadffadfasasdfasdfasdfasdf asdfasdfasdfsadffadfasasdfasdfasdfasdf asdfasdfasdfasdfsadf asdfasdfasdfsadffadfasaasdfsdf',
        },
    ]);
    return (
        <>
            <div className='list-comments'>
                <div className='profile'>
                    {comments.map((comment) => (
                        <div key={comment.id} className='profile-image'>
                            <img src={Profile} alt='Profile' />
                            <div className='comment'>
                                <h5>{comment.name}</h5>
                                <div>
                                    <p>{comment.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Comments