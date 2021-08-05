import React from 'react';

const Comment = ({ name, email, body }) => {
  return (
    <div className="comment-box">
      <div className="comment-box__header">
        <div className="comment-box__avatar">
          {name.split('').slice(0, 1).join('')}
        </div>
        <h3>
          {name.split(' ').slice(0, 2).join(' ')} <span>({email})</span>
        </h3>
      </div>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
