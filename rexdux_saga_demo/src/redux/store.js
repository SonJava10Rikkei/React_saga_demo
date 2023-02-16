import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "./reducers";
import { rootSaga } from "../saga";
//Tạo đối tượng middleware
const sagaMiddleware = createSagaMiddleware();
//Tạo store cho ứng dụng và chấp nhận sagaMiddleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// Chạy rootSaga để lắng nghe các action gửi từ component
sagaMiddleware.run(rootSaga);
export default store;
