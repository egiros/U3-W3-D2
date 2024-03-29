// src/redux/reducers/jobReducer.js
const initialState = {
  jobs: [],
  favorites: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default jobReducer;
