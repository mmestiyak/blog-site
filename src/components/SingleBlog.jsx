import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useStore } from '../store/store';
import Comment from './Comment';

const SingleBlog = () => {
  const { globalState } = useStore();
  const { currentPost } = globalState;
  const [comments, setComments] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await axios(
        `https://jsonplaceholder.typicode.com/posts/${currentPost.id}/comments`
      );
      data.data && setComments(data.data);
    })();
  }, [currentPost.id]);
  useEffect(() => {
    document.title = `${document.title} - ${currentPost.title}`;
    return () => (document.title = "Meer's Blog");
  }, []);
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
          <div className="comments">
            {comments && comments.length > 0 && (
              <>
                <h2 className="h-2">Comments</h2>
                {comments.map((comment) => (
                  <Comment key={comment.id} {...comment} />
                ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SingleBlog;
