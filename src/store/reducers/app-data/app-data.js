import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  movies: [],
  reviews: [],
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};

export {appData};
