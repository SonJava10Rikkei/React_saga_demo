import { USER_GET_SUCCESS } from "../constants/actionTypes";
const initialState = [];
const users = (state = initialState, action) => {
    console.log("Step 6: Nhận action success và xử lý logic ở reducer");
    switch (action.type) {
        case USER_GET_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
export default users;