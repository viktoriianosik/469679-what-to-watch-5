import {ActionCreator} from "./action";

export const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data)))
);

export const fetchReviewsList = (filmID) => (dispatch, _getState, api) => (
  api.get(`/comments/${filmID}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);
