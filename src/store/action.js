import {filterByGenre} from "../filter";

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FILTER_MOVIES_LIST: `FILTER_MOVIES_LIST`,
  CHANGE_MOVIES_COUNT_IN_LIST: `CHANGE_MOVIES_COUNT_IN_LIST`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  filterMoviesList: (genre, movies) => ({
    type: ActionType.FILTER_MOVIES_LIST,
    payload: filterByGenre(genre, movies),
  }),
  changeMoviesCountiNList: (moviesCount) => ({
    type: ActionType.CHANGE_MOVIES_COUNT_IN_LIST,
    payload: moviesCount,
  }),
};
