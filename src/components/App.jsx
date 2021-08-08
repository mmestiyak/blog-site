import React, { useEffect } from 'react';
import '../styles/main.css';
import Blogs from './Blogs';
import { Route, Switch } from 'react-router';
import axios from 'axios';

import SingleBlog from './SingleBlog';
import Navbar from './Navbar';
import { useStore } from '../store/store';
import * as actions from '../store/blogActions';
import AddPost from './AddPost';
import { Redirect } from 'react-router-dom';
const App = () => {
  const { dispatch, globalState } = useStore();

  const setBlogs = async () => {
    const blogsData = await axios('https://jsonplaceholder.typicode.com/posts');
    const usersData = await axios(
      'https://jsonplaceholder.typicode.com/users/'
    );
    const blogs = await blogsData.data;
    const users = await usersData.data;
    const blogsWithAuthorsNames = blogs.reduce((acc, curr) => {
      const index = users.findIndex((user) => user.id === curr.userId);
      if (index > -1) {
        curr.author = {
          username: users[index].username,
          name: users[index].name,
          email: users[index].email,
        };
      }
      acc.push(curr);
      return acc;
    }, []);

    dispatch(actions.setBlogs(blogsWithAuthorsNames));
  };
  useEffect(() => {
    setBlogs();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/">
          {globalState.showPostForm && <AddPost />}
          <Blogs />
        </Route>
        {!globalState.currentPost ? (
          <Redirect to="/" />
        ) : (
          <Route exact path="/:id/:title">
            <SingleBlog />
          </Route>
        )}
      </Switch>
    </div>
  );
};

export default App;
