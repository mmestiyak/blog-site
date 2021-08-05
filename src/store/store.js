import React, { createContext, useContext, useState } from 'react';
import { useReducer } from 'react';
import { reducer } from './blogReducer';
const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);
const StoreProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(reducer, {
    blogs: [],
    currentPost: {},
  });

  const [showAddPostForm, setShowAddPostForm] = useState(false);
  const value = {
    globalState,
    dispatch,
    showAddPostForm,
    setShowAddPostForm,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
