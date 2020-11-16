import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  errorMessage: ``,
};

export const error = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CATCH_ERROR_MESSAGE:
      return (extend(state, {
        errorMessage: action.payload,
      }));
  }

  return state;
};

