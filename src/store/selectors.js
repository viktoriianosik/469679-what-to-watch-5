import {createSelector} from "reselect";
import {NameSpaces} from "./reducers/root-reducer";
import {filterByGenre} from "../filter";
import camelCase from "camelcase-keys";

export const getMoviesList = (state) => {
  return camelCase(state[NameSpaces.DATA].movies);
};

export const getMovie = (state) => {
  return camelCase(state[NameSpaces.DATA].movie);
};

export const getPromoMovie = (state) => {
  return camelCase(state[NameSpaces.DATA].promoMovie);
};

export const getGenre = (state) => {
  return state[NameSpaces.PROCESS].genre;
};

export const getMoviesCount = (state) => {
  return state[NameSpaces.PROCESS].moviesCount;
};

export const getFavoriteMovies = (state) => {
  return camelCase(state[NameSpaces.DATA].favoriteMovies);
};

export const getMoviesByGenre = createSelector(
    getMoviesList,
    getGenre,
    (movies, genre) => {
      return filterByGenre(genre, movies);
    }
);

export const getAuthorizationStatus = (state) => {
  return state[NameSpaces.USER].authorizationStatus;
};

export const getErrorMessage = (state) => {
  return state[NameSpaces.ERROR].errorMessage;
};

