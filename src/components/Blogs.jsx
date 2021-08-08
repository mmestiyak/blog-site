import React from 'react';
import { useStore } from '../store/store';
import Blog from './Blog';
const Blogs = () => {
  const { globalState } = useStore();

  return (
    <div className="blogs">
      {globalState.blogs &&
        globalState.blogs.length > 0 &&
        globalState.blogs
          .sort((a, b) => b.id - a.id)
          .map((blog) => <Blog key={blog.id} blog={blog} />)}
    </div>
  );
};

export default Blogs;
