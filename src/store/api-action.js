import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchMovieList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data)))
);

export const fetchMovie = (filmID) => (dispatch, _getState, api) => (
  api.get(`/films/${filmID}`)
    .then(({data}) => dispatch(ActionCreator.loadMovie(data)))
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromoMovie(data)))
);

export const fetchReviewsList = (filmID) => (dispatch, _getState, api) => (
  api.get(`/comments/${filmID}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.loadFavoriteList(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const commentPost = (filmID, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`/comments/${filmID}`, {rating, comment})
    .then(() => dispatch(ActionCreator.redirectToRoute(`/films/${filmID}`)))
    .catch((err) => dispatch(ActionCreator.catchErrorMessage(err.message)))
);

export const toggleFavorite = (filmID, status, {movie}) => (dispatch, _getState, api) => (
  api.post(`/favorite/${filmID}/${status}`, {movie})
    .then(({data}) => {
      dispatch(ActionCreator.loadMovie(data));
      dispatch(ActionCreator.loadPromoMovie(data));
    })
);
