import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {MOVIES_COUNT} from "../../../const";

const initialState = {
  genre: `All genres`,
  moviesCount: MOVIES_COUNT,
};

export const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
        moviesCount: MOVIES_COUNT,
      });
    case ActionType.CHANGE_MOVIES_COUNT_IN_LIST:
      return extend(state, {
        moviesCount: +action.payload
      });
  }

  return state;
};
