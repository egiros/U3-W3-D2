// src/redux/actions/index.js
export const addToFavorites = (job) => ({
  type: "ADD_TO_FAVORITES",
  payload: job,
});

export const removeFromFavorites = (job) => ({
  type: "REMOVE_FROM_FAVORITES",
  payload: job,
});
