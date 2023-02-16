import { call, put } from 'redux-saga/effects';
import * as services from '../util/users_service';
import { act_success } from '../redux/actions';
import { USER_GET_SUCCESS } from '../redux/constants/actionTypes';
export function* get_all_user() {
    console.log("Step 3: Vào saga, gọi GET_USER");
    let listUser = yield call(services.GET_USER);
    console.log("Step 5: Chuyển data sang reducer");
    yield put(act_success(listUser, USER_GET_SUCCESS))
}
export function* create_user(action) {
    yield call(services.POST_USER, action.payload);
    get_all_user();
}