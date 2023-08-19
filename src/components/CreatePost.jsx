import React from 'react';
import Modal from 'react-modal';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from '../assets/wanda.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  postText: Yup.string().required("Post text is required"),
});

function CreatePostModal({ isOpen, closeModal, postText, setPostText, handlePost }) {
  const formik = useFormik({
    initialValues: {
      postDescription: '',
      imgPost: '',
      dateCreated: '',
      userId: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // try {
      //   const res = await axios.post('http://localhost:8000/api/v1/post', values);
      //   console.log('Post successful: ', res.data);
      // } catch (error) {
      //   console.error('Post failed: ', error)
      // }
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
        <input type="file" id="myFile" name="filename" className='upload-button' 
          placeholder="What's on your mind?"
          {...formik.getFieldProps('imgPost')}
        />
      </div>
      <form className='form-container' onSubmit={formik.handleSubmit}>
        <textarea
          className="input-feed"
          placeholder="What's on your mind?"
          {...formik.getFieldProps('postDescription')}
        />
        {formik.touched.postText && formik.errors.postText ? (
          <div className='error-container'>
            {formik.errors.postText}
          </div>
        ) : null}
        <button type="submit" className="post-button">Post</button>
      </form>
      <button onClick={closeModal} className="cancel-button">Cancel</button>
    </Modal>
  );
}

export default CreatePostModal;
