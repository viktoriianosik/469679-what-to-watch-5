import {appProcess} from "./app-process";
import {ActionType} from "../../action";
import {MOVIES_COUNT} from "../../../const";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appProcess(void 0, {})).toEqual({
    genre: `All genres`,
    moviesCount: MOVIES_COUNT,
  });
});

it(`Reducer should change genre and update movies count`, () => {
  expect(appProcess({
    genre: `All genres`,
    moviesCount: MOVIES_COUNT,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Comedy`,
  })).toEqual({
    genre: `Comedy`,
    moviesCount: MOVIES_COUNT,
  });
});

it(`Reducer should change movies count in list`, () => {
  expect(appProcess({
    genre: `All genres`,
    moviesCount: MOVIES_COUNT,
  }, {
    type: ActionType.CHANGE_MOVIES_COUNT_IN_LIST,
    payload: 8,
  })).toEqual({
    genre: `All genres`,
    moviesCount: +8,
  });
});
