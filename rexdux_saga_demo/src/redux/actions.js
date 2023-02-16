import * as actionTypes from "./constants/actionTypes";
export const act_get_user = () => {
    console.log("Step 2: Vào action, chuyển dữ liệu đến reduxSaga");
    return {
        type: actionTypes.USER_GET
    }
}
export const act_post_user = (user) => {
    console.log("Vao act_post_user", user);
    return {
        type: actionTypes.USER_POST,
        payload: user
    }
}
export const act_success = (data, actionType) => {
    return {
        type: actionType,
        payload: data
    }
}