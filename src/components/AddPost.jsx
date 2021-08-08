import React, { useRef } from 'react';
import axios from 'axios';
import { useStore } from '../store/store';
import { setBlogs } from '../store/blogActions';

const AddPost = () => {
  const inputTitleRef = useRef();
  const inputBodyRef = useRef();
  const inputUserIdRef = useRef();

  const { dispatch } = useStore();
  const addPost = async (e) => {
    const data = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        userId: Number(inputUserIdRef.current.value),
        title: inputTitleRef.current.value,
        body: inputBodyRef.current.value,
      },
      {
        'Content-type': 'application/json; charset=UTF-8',
      }
    );
    dispatch(setBlogs([data.data]));
    e.target.reset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(e);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="post-form">
        <input
          required
          type="text"
          name="title"
          placeholder="Title"
          id=""
          ref={inputTitleRef}
        />
        <textarea
          ref={inputBodyRef}
          required
          name="body"
          placeholder="Post"
          id=""
        />
        <input
          ref={inputUserIdRef}
          required
          type="number"
          name="userId"
          placeholder="User ID"
          id=""
        />
        <input required type="submit" value="Post" />
      </form>
    </>
  );
};

export default AddPost;
