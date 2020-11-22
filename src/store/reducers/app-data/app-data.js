import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  movies: [],
  reviews: [],
  movie: null,
  promoMovie: {},
  favoriteMovies: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.LOAD_MOVIE:
      return extend(state, {
        movie: action.payload,
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_FAVORITE_LIST:
      return extend(state, {
        favoriteMovies: action.payload,
      });
  }

  return state;
};

export {appData};
