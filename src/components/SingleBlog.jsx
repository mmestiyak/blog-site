import axios from 'axios';
import isKhali from 'khali';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { setCurrentPost } from '../store/blogActions';
import { useStore } from '../store/store';
import Comment from './Comment';

const SingleBlog = () => {
  const { id } = useParams();
  const { globalState, dispatch } = useStore();
  const { currentPost } = globalState;
  const [comments, setComments] = useState(null);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      await dispatch(setCurrentPost(id));
      if (currentPost && isKhali(currentPost)) {
        history.push('/');
      }
      const data = await axios(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      data.data && setComments(data.data);
    })();
  }, [id]);

  return (
    <div className="single-blog">
      {currentPost && (
        <>
          <h1 className="h-1">{currentPost.title}</h1>
          {currentPost.author && (
            <h3>
              &mdash; <br /> {currentPost.author.name}{' '}
              <span style={{ color: 'tomato' }}>
                (@
                {currentPost.author.username})
              </span>{' '}
              <br />
              {currentPost.author.email.toLowerCase()}
            </h3>
          )}
          <hr />
          <p>{currentPost.body}</p>
          {comments && comments.length > 0 && (
            <>
              <h2 className="h-2">Comments</h2>
              {comments.map((comment) => (
                <Comment key={comment.id} {...comment} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SingleBlog;
