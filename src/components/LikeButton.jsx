import React, { useState } from 'react';

const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);

  const addLikeAction = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <button className='like-button' onClick={addLikeAction}>
      {likeCount} {likeCount === 1 ? 'Like' : 'Likes'}
    </button>
  );
};

export default LikeButton;





