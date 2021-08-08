import React from 'react';
import { Link } from 'react-router-dom';
import { setCurrentPost } from '../store/blogActions';
import { useStore } from '../store/store';

const Blog = ({ blog }) => {
  const { id, title, body, author } = blog;
  const { dispatch } = useStore();
  const handleClick = () => {
    dispatch(setCurrentPost(id));
  };
  return (
    <div className="blogs__item">
      {id && title && body && (
        <>
          <Link
            onClick={handleClick}
            to={`${id}/${title.split(' ').join('-')}`}
          >
            <h2>
              #{id} {title}{' '}
              {author && <span className="author">By @{author.username}</span>}
            </h2>
          </Link>
          <p>
            {body.slice(0, Math.ceil(body.length / 2))} <br></br>
            <Link
              onClick={handleClick}
              to={`${id}/${title.split(' ').join('-')}`}
            >
              read more...
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default Blog;
