import { combineReducers } from "redux";
import users from "./users";
import students from "./students";
export const rootReducer = combineReducers({ users, students });