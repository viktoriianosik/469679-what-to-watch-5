import {extend} from "../utils";
import {ActionType} from "./action";
import movies from "../mocks/movies";

const initialState = {
  movies,
  genre: `All genre`,
  filteredMovies: movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });
    case ActionType.FILTER_MOVIES_LIST:
      return extend(state, {
        filteredMovies: action.payload,
      });
  }

  return state;
};

export {reducer};
