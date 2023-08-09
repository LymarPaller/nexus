import React, { useState } from 'react';
import '../styles/Comments.scss';
import Profile from '../assets/wanda.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Comments() {
    const [comments, setComments] = useState([
        {
            id: 1,
            name: 'Riya Villamor',
            text: 'That dog is adorable!',
        },
        {
            id: 2,
            name: 'Lymar Paller',
            text:
                'I want to adopt this dog! Can I?',
        },
        {
            id: 3,
            name: 'Klane Zurbano',
            text:
                'This dog reminds me of my furry friend!',
        },
    ]);

    const handleRemoveComment = (id) => {
        const updatedComments = comments.filter(comment => comment.id !== id);
        setComments(updatedComments);
    };

    return (
        <div className='list-comments'>
            <div className='profile'>
                {comments.map((comment) => (
                    <div key={comment.id} className='profile-image'>
                        <img src={Profile} alt='Profile' />
                        <div className='comment'>
                            <h5>
                                {comment.name}
                                <span className='remove-comment' onClick={() => handleRemoveComment(comment.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                            </h5>
                            <div>
                                <p>{comment.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comments;
