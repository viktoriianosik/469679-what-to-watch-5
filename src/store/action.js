export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  CHANGE_MOVIES_COUNT_IN_LIST: `CHANGE_MOVIES_COUNT_IN_LIST`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_MOVIE: `LOAD_MOVIE`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  CATCH_ERROR_MESSAGE: `CATCH_ERROR_MESSAGE`,
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
  loadMovie: (movie) => ({
    type: ActionType.LOAD_MOVIE,
    payload: movie,
  }),
  loadReviews: (comments) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: comments,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  catchErrorMessage: (error) => ({
    type: ActionType.CATCH_ERROR_MESSAGE,
    payload: error,
  }),
};
