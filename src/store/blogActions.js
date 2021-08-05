import ACTIONS from './blogActionTypes';

export const setBlogs = (blogs) => ({
  type: ACTIONS.SET_BLOGS,
  payload: {
    blogs,
  },
});

export const setCurrentPost = (id) => ({
  type: ACTIONS.SET_CURRENT_POST,
  payload: {
    id: Number(id),
  },
});

export const clearBlogs = () => ({
  type: ACTIONS.CLEAR_BLOGS,
});
