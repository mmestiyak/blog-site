import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { showPostForm } from '../store/blogActions';
import { useStore } from '../store/store';
const Navbar = () => {
  const location = useLocation();
  const { dispatch, globalState } = useStore();
  const [isHomepage, setIsHomePage] = useState();
  useEffect(() => {
    if (location.pathname === '/') {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location]);
  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="h-1">Meer's Blog</h2>
      </Link>
      <nav>
        {isHomepage && (
          <button
            onClick={() => {
              dispatch(showPostForm(!globalState.showPostForm));
            }}
          >
            Add Post
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
