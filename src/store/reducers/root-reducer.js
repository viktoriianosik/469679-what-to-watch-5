import {appProcess} from "./app-process/app-process";
import {appData} from "./app-data/app-data";
import {user} from "./user/user";
import {combineReducers} from "redux";

export const NameSpaces = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpaces.DATA]: appData,
  [NameSpaces.PROCESS]: appProcess,
  [NameSpaces.USER]: user,
});
