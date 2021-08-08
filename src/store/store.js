import React, { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { reducer } from './blogReducer';
const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);
const StoreProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(reducer, {
    blogs: [],
    showPostForm: false,
  });

  const value = {
    globalState,
    dispatch,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
