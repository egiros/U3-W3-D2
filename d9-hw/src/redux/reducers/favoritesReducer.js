// redux/reducers/favoritesReducer.js
const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return [...state, action.payload];
    case "REMOVE_FROM_FAVORITES":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default favoritesReducer;
