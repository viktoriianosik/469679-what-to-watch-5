import {extend} from "../utils";
import {ActionType} from "./action";
import movies from "../mocks/movies";
import {MOVIES_COUNT} from "../const";

const initialState = {
  movies,
  genre: `All genre`,
  filteredMovies: movies,
  moviesCount: MOVIES_COUNT,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
        moviesCount: MOVIES_COUNT,
      });
    case ActionType.FILTER_MOVIES_LIST:
      return extend(state, {
        filteredMovies: action.payload,
      });
    case ActionType.CHANGE_MOVIES_COUNT_IN_LIST:
      return extend(state, {
        moviesCount: +action.payload
      });
  }

  return state;
};
