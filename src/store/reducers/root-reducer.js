import {appProcess} from "./app-process/app-process";
import {appData} from "./app-data/app-data";
import {user} from "./user/user";
import {error} from "./error/error";
import {combineReducers} from "redux";

export const NameSpaces = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`,
  ERROR: `ERROR`,
};

export default combineReducers({
  [NameSpaces.DATA]: appData,
  [NameSpaces.PROCESS]: appProcess,
  [NameSpaces.USER]: user,
  [NameSpaces.ERROR]: error,
});
