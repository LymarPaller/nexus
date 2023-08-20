import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';

const LikeButton = (props) => {
  const {postId} =props
  const [likes, setLikes] = useState([]);

  const fetchLikes = async () => {
      const res = await axios (`http://localhost:8000/api/v1/like?postId=${postId}`)
      setLikes(res.data.data.length)
  }

  useEffect(() => {
    fetchLikes();
  }, []);

  const formik = useFormik({
      initialValues: {
        userId: 66,
        postId: postId,
      },
      onSubmit: async (values) => {
      try {
          const res = await axios.post('http://localhost:8000/api/v1/like', values);
          console.log('Like successful: ', res.data);
          fetchLikes()
      } catch (error) {
          console.error('Like failed: ', error)
      }
      }
  });

  return (
    <button className='like-button' key={likes.id} onClick={formik.handleSubmit}  type='submit'>
      {likes} {likes === 1 ? 'Like' : 'Likes'}
    </button>
  );
};

export default LikeButton;





