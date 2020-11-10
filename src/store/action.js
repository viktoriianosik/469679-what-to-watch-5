export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHANGE_MOVIES_COUNT_IN_LIST: `CHANGE_MOVIES_COUNT_IN_LIST`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  changeMoviesCountList: (moviesCount) => ({
    type: ActionType.CHANGE_MOVIES_COUNT_IN_LIST,
    payload: moviesCount,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
  loadReviews: (comments) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: comments,
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};
