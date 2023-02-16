// Cài đặt rootSaga để lắng nghe các action, gọi saga tương ứng
import { all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../redux/constants/actionTypes";
import * as userSaga from "./userSaga";
export const rootSaga = function* () {
    yield all([
        takeLatest(actionTypes.USER_GET, userSaga.get_all_user),
        takeLatest(actionTypes.USER_POST, userSaga.create_user)
    ])
}