import {createSelector} from "reselect";
import {NameSpaces} from "./reducers/root-reducer";
import {filterByGenre} from "../filter";
import camelCase from "camelcase-keys";

export const getMovies = (state) => {
  return camelCase(state[NameSpaces.DATA].movies);
};

export const getGenre = (state) => {
  return state[NameSpaces.PROCESS].genre;
};

export const getMoviesByGenre = createSelector(
    getMovies,
    getGenre,
    (movies, genre) => {
      return filterByGenre(genre, movies);
    }
);
