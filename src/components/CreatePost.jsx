import React from 'react';
import Modal from 'react-modal';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from '../assets/wanda.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const validationSchema = Yup.object({
  postDescription: Yup.string().required("Post text is required"),
});

function CreatePostModal({ isOpen, closeModal, fetchFeed}) {

  const currentUser = useSelector((state) => state.currentUser);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}`;
  const userId = currentUser.id;

  const formik = useFormik({

    initialValues: {
      postDescription: '',
      imgPost: '',
      dateCreated: formattedDate,
      userId: userId,
    },


    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values)
      try {
        const res = await axios.post('http://localhost:8000/api/v1/post', values);
        console.log('Post successful: ', res.data);
      } catch (error) {
        console.error('Post failed: ', error)
      }
      formik.resetForm();
      closeModal();
      fetchFeed();
    },
  });
  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="new-create-post"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <div className='create-post-header-container'>
        <h4 className='create-post-header'>Create Post</h4>
      </div>
      <FontAwesomeIcon icon={faTimes} className="logout-xmark" onClick={closeModal} />
      <div className="profile-pic">
        <img src={Profile} alt="Profile" />
        <h5>Wanda Zurbano</h5>
      </div>
      <div className='upload-photo'>
        <input type="file"
        id="myFile"
        name="filename"
        className='upload-button' 
        {...formik.getFieldProps('imgPost')}/>
      </div>
      <form className='form-container' onSubmit={formik.handleSubmit}>
        <textarea
          className="input-feed"
          placeholder="What's on your mind?"
          {...formik.getFieldProps('postDescription')}
        />
        {formik.touched.postDescription && formik.errors.postDescription ? (
          <div className='error-container'>
            {formik.errors.postDescription}
          </div>
        ) : null}
        <button type="submit" className="post-button">Post</button>
      </form>
      <button onClick={closeModal} className="cancel-button">Cancel</button>
    </Modal>
  );
}

export default CreatePostModal;
