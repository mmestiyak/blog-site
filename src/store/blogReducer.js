import ACTIONS from './blogActionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_BLOGS:
      if (action.payload.blogs) {
        return {
          ...state,
          blogs: [...state.blogs, ...action.payload.blogs],
        };
      }
      return state;
    case ACTIONS.SET_CURRENT_POST:
      return {
        ...state,
        currentPost: state.blogs.find((blog) => blog.id === action.payload.id),
      };
    default:
      return state;
  }
};
