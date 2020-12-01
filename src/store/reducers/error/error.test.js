import {error} from "./error";
import {ActionType} from "../../action";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(error(void 0, {})).toEqual({
    errorMessage: ``,
  });
});

it(`Reducer should update errorMessage`, () => {
  expect(error({
    errorMessage: ``,
  }, {
    type: ActionType.CATCH_ERROR_MESSAGE,
    payload: `error 404`
  })).toEqual({
    errorMessage: `error 404`
  });
});

