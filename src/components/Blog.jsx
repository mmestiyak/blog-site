import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ id, title, body, author }) => {
  return (
    <div className="blogs__item">
      {id && title && body && (
        <>
          <Link to={`${id}/${title.split(' ').join('-')}`}>
            <h2>
              #{id} {title}{' '}
              {author && <span className="author">By @{author.username}</span>}
            </h2>
          </Link>
          <p>
            {body.slice(0, Math.ceil(body.length / 2))} <br></br>
            <Link to={`${id}/${title.split(' ').join('-')}`}>read more...</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default Blog;
